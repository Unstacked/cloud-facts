#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { CloudFactsStack } from '../lib/cdk-stack';

const app = new App();
new CloudFactsStack(app, 'CloudFacts', {
  env: { account: '806124249357', region: 'us-east-1' },
});
