const sizeOrder = [
  'nano',
  'micro',
  'small',
  'medium',
  'large',
  'xlarge',
  '2xlarge',
  '3xlarge',
  '4xlarge',
  '6xlarge',
  '8xlarge',
  '9xlarge',
  '10xlarge',
  '12xlarge',
  '16xlarge',
  '18xlarge',
  '24xlarge',
  '32xlarge',
  '48xlarge',
  '56xlarge',
  '96xlarge',
  '112xlarge',

  'metal',
  'metal-16xl',
  'metal-24xl',
  'metal-32xl',
  'metal-48xl',
];

export function instanceSizeSort(
  sizes: string[],
  excludeMetal?: boolean,
): string[] {
  let output: string[] = [];
  for (let index in sizeOrder) {
    if (excludeMetal && sizeOrder[index] == 'metal') {
      break;
    }
    const size = sizeOrder[index];
    if (sizes.includes(size)) {
      output.push(size);
    }
  }
  return output;
}

enum InstanceComputeClass {
  General_Purpose = 'General Purpose',
  Compute_Optimized = 'Compute Optimized',
  Memory_Optimized = 'Memory Optimized',
  Accelerated_Computing = 'Accelerated Computing',
  Storage_Optimized = 'Storage Optimized',
  HPC_Optimized = 'HPC Optimized',
  Unknown = '',
}

const InstanceComputeTypes: { [type: string]: InstanceComputeClass } = {
  a: InstanceComputeClass.General_Purpose,
  m: InstanceComputeClass.General_Purpose,
  t: InstanceComputeClass.General_Purpose,
  mac: InstanceComputeClass.General_Purpose,
  c: InstanceComputeClass.Compute_Optimized,
  r: InstanceComputeClass.Memory_Optimized,
  x: InstanceComputeClass.Memory_Optimized,
  z: InstanceComputeClass.Memory_Optimized,
  u: InstanceComputeClass.Memory_Optimized,
  'u-': InstanceComputeClass.Memory_Optimized,
  p: InstanceComputeClass.Accelerated_Computing,
  g: InstanceComputeClass.Accelerated_Computing,
  gr: InstanceComputeClass.Accelerated_Computing,
  trn: InstanceComputeClass.Accelerated_Computing,
  inf: InstanceComputeClass.Accelerated_Computing,
  dl: InstanceComputeClass.Accelerated_Computing,
  f: InstanceComputeClass.Accelerated_Computing,
  vt: InstanceComputeClass.Accelerated_Computing,
  i: InstanceComputeClass.Storage_Optimized,
  im: InstanceComputeClass.Storage_Optimized,
  is: InstanceComputeClass.Storage_Optimized,
  d: InstanceComputeClass.Storage_Optimized,
  h: InstanceComputeClass.Storage_Optimized,
  hpc: InstanceComputeClass.HPC_Optimized,
};

export function getInstanceComputeClass(family: string): InstanceComputeClass {
  const type = family.split(/[0-9]/)[0].toLocaleLowerCase();
  return InstanceComputeTypes[type] ?? InstanceComputeClass.Unknown;
}
