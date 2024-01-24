#!/usr/bin/env node
import 'source-map-support/register';
import {
  App,
  Stack,
  RemovalPolicy,
  aws_certificatemanager as acm,
  aws_cloudfront as cf,
  aws_cloudfront_origins as cfo,
  aws_route53 as r53,
  aws_route53_targets as r53t,
  aws_s3 as s3,
  aws_s3_deployment as s3d,
  type StackProps,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { join } from 'path';
import gitRootDir from 'git-root-dir';
import { spawnSync } from 'child_process';

const rootDir = (await gitRootDir()) || '.';

class CloudFactsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const domainName = 'undoc.cloud';

    const zone = r53.HostedZone.fromLookup(this, 'Zone', { domainName });

    const certificate = new acm.Certificate(this, 'Certificate', {
      domainName,
      validation: acm.CertificateValidation.fromDns(zone),
    });

    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      autoDeleteObjects: true,
      removalPolicy: RemovalPolicy.DESTROY,
      encryption: s3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    const distribution = new cf.Distribution(this, 'WebDistrobution', {
      defaultBehavior: {
        origin: new cfo.S3Origin(websiteBucket),
        viewerProtocolPolicy: cf.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        functionAssociations: [
          {
            function: new cf.Function(this, 'UrlRewriteFunction', {
              code: cf.FunctionCode.fromInline(`function handler(event) {
              var request = event.request;
              var uri = request.uri;
            
              // Check whether the URI is missing a file name.
              if (uri.endsWith('/')) {
                request.uri += 'index.html';
              }
              // Check whether the URI is missing a file extension.
              else if (!uri.includes('.')) {
                request.uri += '/index.html';
              }
            
              return request;
            }`),
            }),
            eventType: cf.FunctionEventType.VIEWER_REQUEST,
          },
        ],
      },
      certificate,
      domainNames: [domainName],
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responsePagePath: '/404.html',
          responseHttpStatus: 404,
        },
        {
          httpStatus: 403,
          responsePagePath: '/404.html',
          responseHttpStatus: 404,
        },
      ],
    });

    spawnSync(
      'npm',
      [
        'run',
        'build',
      ],
      { cwd: rootDir },
    );

    new s3d.BucketDeployment(this, 'Deployment', {
      distribution,
      distributionPaths: [
        '/',
        '/*',
      ],
      sources: [s3d.Source.asset(join(rootDir, 'dist'))],
      destinationBucket: websiteBucket,
    });

    new r53.ARecord(this, 'WebsiteARecord', {
      zone,
      target: r53.RecordTarget.fromAlias(
        new r53t.CloudFrontTarget(distribution),
      ),
      recordName: domainName,
    });

    new r53.AaaaRecord(this, 'WebsiteAaaaRecord', {
      zone,
      target: r53.RecordTarget.fromAlias(
        new r53t.CloudFrontTarget(distribution),
      ),
      recordName: domainName,
    });
  }
}

const app = new App();
new CloudFactsStack(app, 'CloudFacts', {
  env: { account: '806124249357', region: 'us-east-1' },
});
