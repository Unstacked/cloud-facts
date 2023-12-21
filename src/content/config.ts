import { z, defineCollection } from 'astro:content';
import type { InstanceFamily } from '../../generator/lib/ec2-instance-types';
import type { InstanceTypeInfo } from '@aws-sdk/client-ec2';

export const collections = {
  'instance-types': defineCollection<InstanceTypeInfo>({ type: 'data' }),
  'instance-families': defineCollection<InstanceFamily>({ type: 'data' }),
};
