import { EC2, InstanceTypeInfo } from '@aws-sdk/client-ec2';
import { writeFileSync } from "fs";

const ec2 = new EC2({
  region: 'us-east-1'
});

export interface InstanceFamily {
  name: string;
  // instanceTypes: InstanceTypeInfo[];
  regions: string[];
  sizes: string[];
  cpu: {
    architectures: string[];
    minThreads: number;
    maxCores: number;
  };
  memory: {
    minMib: number;
    maxMib: number;
  };
}


async function getInstanceTypes() {
  let instanceTypes: InstanceTypeInfo[] = [];
  for (let response = await ec2.describeInstanceTypes({}), next = true; next; response = await ec2.describeInstanceTypes({ NextToken: response.NextToken })) {
    next = response.NextToken != undefined
    for (let instanceType of response.InstanceTypes!) {
      instanceTypes.push(instanceType);
      writeDataToFile(`../frontend/src/content/instance-types/${instanceType.InstanceType}.json`, instanceType);
    }
  }
  // create a map of all instance types by their instance family
  let instanceFamilies: { [Key: string]: InstanceFamily } = {};
  for (let instanceType of instanceTypes) {
    const family = instanceType.InstanceType!.split(".")[0]
    const size = instanceType.InstanceType!.split(".")[1]
    if (instanceFamilies[family] == undefined) {
      instanceFamilies[family] = {
        name: family,
        // instanceTypes: [],
        regions: [],
        sizes: [],
        cpu: {
          architectures: instanceType.ProcessorInfo?.SupportedArchitectures!,
          minThreads: instanceType.VCpuInfo?.DefaultVCpus!,
          maxCores: instanceType.VCpuInfo?.DefaultVCpus!,
        },
        memory: {
          minMib: instanceType.MemoryInfo?.SizeInMiB!,
          maxMib: instanceType.MemoryInfo?.SizeInMiB!,
        },
      };
    }
    // instanceFamilies[family].instanceTypes.push(instanceType);
    // instanceFamilies[family].regions.push();
    instanceFamilies[family].sizes.push(size);
    instanceFamilies[family].cpu.minThreads = Math.min(instanceType.VCpuInfo?.DefaultVCpus!, instanceFamilies[family].cpu.minThreads);
    instanceFamilies[family].cpu.maxCores = Math.max(instanceType.VCpuInfo?.DefaultVCpus!, instanceFamilies[family].cpu.maxCores);
    instanceFamilies[family].memory.minMib = Math.min(instanceType.MemoryInfo?.SizeInMiB!, instanceFamilies[family].memory.minMib);
    instanceFamilies[family].memory.maxMib = Math.max(instanceType.MemoryInfo?.SizeInMiB!, instanceFamilies[family].memory.maxMib);
  }
  for (let family of Object.values(instanceFamilies)) {
    writeDataToFile(`../frontend/src/content/instance-families/${family.name}.json`, family);
  }
}

function writeDataToFile(path: string, data: any) {
  console.log(`Writing data to ${path}`);
  writeFileSync(path, JSON.stringify(data, null, 2));
}

getInstanceTypes();

