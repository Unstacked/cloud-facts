import {
  Stack,
  StackProps,
  RemovalPolicy,
  Duration,
  aws_cloudfront as cf,
  aws_cloudfront_origins as cfo,
  aws_s3 as s3,
  aws_route53 as r53,
  aws_route53_targets as r53t,
  aws_certificatemanager as acm,
  aws_s3_deployment as s3d,
  aws_lambda as lambda,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { join } from 'path';

export class CloudFactsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const domainName = 'undoc.cloud';

    const zone = r53.HostedZone.fromLookup(this, 'Zone', { domainName });

    const certificate = new acm.Certificate(this, 'Certificate', {
      domainName,
      validation: acm.CertificateValidation.fromDns(zone),
    });

    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket');

    const distribution = new cf.Distribution(this, 'WebDistrobution', {
      defaultBehavior: {
        origin: new cfo.S3Origin(websiteBucket),
        viewerProtocolPolicy: cf.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      certificate,
      domainNames: [domainName],
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responsePagePath: '404.html',
          responseHttpStatus: 404,
        },
        {
          httpStatus: 403,
          responsePagePath: '404.html',
          responseHttpStatus: 404,
        },
      ],
    });

    new s3d.BucketDeployment(this, 'Deployment', {
      distribution,
      distributionPaths: ['/', '/*'],
      sources: [
        s3d.Source.asset(join(__dirname, '..', '..'), {
          bundling: {
            image: lambda.Runtime.NODEJS_18_X.bundlingImage,
            command: [
              'bash',
              '-xc',
              'export npm_config_update_notifier=false && export npm_config_cache=$(mktemp -d) && npm ci && npm run build && cp -au dist/* /asset-output',
            ],
          },
        }),
      ],
      destinationBucket: websiteBucket,
    });

    new r53.ARecord(this, 'WebsiteARecord', {
      zone,
      target: r53.RecordTarget.fromAlias(
        new r53t.CloudFrontTarget(distribution)
      ),
      recordName: domainName,
    });

    new r53.AaaaRecord(this, 'WebsiteAaaaRecord', {
      zone,
      target: r53.RecordTarget.fromAlias(
        new r53t.CloudFrontTarget(distribution)
      ),
      recordName: domainName,
    });
  }
}
