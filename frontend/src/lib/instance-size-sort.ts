const sizeOrder = [
    "nano",
    "micro",
    "small",
    "medium",
    "large",
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
]

export function instanceSizeSort(sizes: string[]): string[] {
    let output: string[] = []
    for (let index in sizeOrder) {
        const size = sizeOrder[index]
        if (sizes.includes(size)) {
            output.push(size)
        }
    }
    return output
}