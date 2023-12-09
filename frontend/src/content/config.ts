import { z, defineCollection } from 'astro:content';
const instanceTypeCollection = defineCollection({
    type: 'data',
    schema: z.object({
        AutoRecoverySupported: z.boolean(),
        BareMetal: z.boolean(),
        BurstablePerformanceSupported: z.boolean(),
        CurrentGeneration: z.boolean(),
        DedicatedHostsSupported: z.boolean(),
        EbsInfo: z.object({
            EbsOptimizedInfo: z.object({
                BaselineBandwidthInMbps: z.number(),
                BaselineIops: z.number(),
                BaselineThroughputInMBps: z.number(),
                MaximumBandwidthInMbps: z.number(),
                MaximumIops: z.number(),
                MaximumThroughputInMBps: z.number(),
            }).optional(),
            EbsOptimizedSupport: z.string(),
            EncryptionSupport: z.string(),
            NvmeSupport: z.string(),
        }),
        FreeTierEligible: z.boolean(),
        HibernationSupported: z.boolean(),
        InstanceStorageSupported: z.boolean(),
        NetworkInfo: z.object({
            DefaultNetworkCardIndex: z.number(),
            EfaSupported: z.boolean(),
            EnaSrdSupported: z.boolean(),
            EnaSupport: z.string(),
            EncryptionInTransitSupported: z.boolean(),
            Ipv4AddressesPerInterface: z.number(),
            Ipv6AddressesPerInterface: z.number(),
            Ipv6Supported: z.boolean(),
            MaximumNetworkCards: z.number(),
            MaximumNetworkInterfaces: z.number(),
            NetworkCards: z.array(z.object({
                BaselineBandwidthInGbps: z.number(),
                MaximumNetworkInterfaces: z.number(),
                NetworkCardIndex: z.number(),
                NetworkPerformance: z.string(),
                PeakBandwidthInGbps: z.number()
            })),
            NetworkPerformance: z.string(),
        }),
        NitroEnclavesSupport: z.string(),
        NitroTpmSupport: z.string(),
        PlacementGroupInfo: z.object({
            SupportedStrategies: z.array(z.string())
        }),
        SupportedBootModes: z.array(z.string()),
        SupportedRootDeviceTypes: z.array(z.string()),
        SupportedUsageClasses: z.array(z.string()),
        SupportedVirtualizationTypes: z.array(z.string()),
        InstanceType: z.string(),
        MemoryInfo: z.object({
            SizeInMiB: z.number(),
        }),
        ProcessorInfo: z.object({
            Manufacturer: z.string(),
            SupportedArchitectures: z.array(z.string()),
            SustainedClockSpeedInGhz: z.number().optional(),
        }),
        VCpuInfo: z.object({
            DefaultCores: z.number(),
            DefaultThreadsPerCore: z.number(),
            DefaultVCpus: z.number(),
        })
    })
});
export const collections = {
    'instance-types': instanceTypeCollection,
};