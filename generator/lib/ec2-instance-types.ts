import {
  EC2,
  type InstanceTypeInfo,
  paginateDescribeInstanceTypes,
} from '@aws-sdk/client-ec2';
import { getAllRegions } from './regions';
import { writeContentDir, writeDataToFile } from './util';

export interface InstanceFamily {
  name: string;
  regions: string[];
  sizes: string[];
  currentGeneration: boolean;
  cpu: {
    architectures: string[];
    minThreads: number;
    maxCores: number;
  };
  memory: {
    minMib: number;
    maxMib: number;
  };
  // network: {

  // }
}

export async function getInstanceTypes() {
  let instanceTypes: { [key: string]: InstanceTypeInfo } = {};

  const regions = await getAllRegions();

  // create a map of all instance types by their region
  let instanceTypesByRegion: { [Key: string]: string[] } = {};
  let regionsByInstanceType: { [Key: string]: string[] } = {};
  let instanceFreeTierRegions: { [Key: string]: string[] } = {};

  const getInstanceTypesByRegion = async (region: string) => {
    const ec2 = new EC2({ region });
    console.log(`Getting instance types for region ${region}...`);
    // get all instance types in this region
    for await (const page of paginateDescribeInstanceTypes(
      { client: ec2 },
      {}
    )) {
      for (let instanceType of page.InstanceTypes!) {
        if (instanceTypesByRegion[region]) {
          instanceTypesByRegion[region].push(instanceType.InstanceType!);
        } else {
          instanceTypesByRegion[region] = [instanceType.InstanceType!];
        }
        if (regionsByInstanceType[instanceType.InstanceType!]) {
          regionsByInstanceType[instanceType.InstanceType!].push(region);
        } else {
          regionsByInstanceType[instanceType.InstanceType!] = [region];
        }
        if (instanceType.FreeTierEligible) {
          if (instanceFreeTierRegions[region]) {
            instanceFreeTierRegions[region].push(instanceType.InstanceType!);
          } else {
            instanceFreeTierRegions[region] = [instanceType.InstanceType!];
          }
        }
        if (region == 'us-east-1') {
          instanceTypes[instanceType.InstanceType!] = instanceType;
        }
      }
    }
    console.log(`Finished getting instance types for region ${region}...`);
  };
  let promises = [];
  for (let region of regions) {
    promises.push(getInstanceTypesByRegion(region));
  }
  for (let promise of promises) {
    await promise;
  }

  // create a map of all instance types by their instance family
  let instanceFamilies: { [Key: string]: InstanceFamily } = {};
  for (let instanceType of Object.values(instanceTypes)) {
    const family = instanceType.InstanceType!.split('.')[0];
    const size = instanceType.InstanceType!.split('.')[1];
    if (instanceFamilies[family] == undefined) {
      instanceFamilies[family] = {
        name: family,
        regions: regionsByInstanceType[instanceType.InstanceType!].sort(),
        sizes: [],
        currentGeneration: instanceType.CurrentGeneration!,
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
    instanceFamilies[family].sizes.push(size);
    instanceFamilies[family].sizes = instanceFamilies[family].sizes.sort();
    instanceFamilies[family].cpu.minThreads = Math.min(
      instanceType.VCpuInfo?.DefaultVCpus!,
      instanceFamilies[family].cpu.minThreads
    );
    instanceFamilies[family].cpu.maxCores = Math.max(
      instanceType.VCpuInfo?.DefaultVCpus!,
      instanceFamilies[family].cpu.maxCores
    );
    instanceFamilies[family].memory.minMib = Math.min(
      instanceType.MemoryInfo?.SizeInMiB!,
      instanceFamilies[family].memory.minMib
    );
    instanceFamilies[family].memory.maxMib = Math.max(
      instanceType.MemoryInfo?.SizeInMiB!,
      instanceFamilies[family].memory.maxMib
    );
  }

  writeDataToFile(
    'src/lib/instance-free-tier-regions.json',
    instanceFreeTierRegions
  );

  writeContentDir('instance-families', instanceFamilies);
  writeContentDir('instance-types', instanceTypes);
}
