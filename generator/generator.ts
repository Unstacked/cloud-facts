import { getInstanceTypes } from './lib/ec2-instance-types';
import { filesWritten } from './lib/util';

await getInstanceTypes();

console.log(`Wrote ${filesWritten} files`);
