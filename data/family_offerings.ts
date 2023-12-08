interface offering {
  regions: string[],
  sizes: string[],
}

export const offerings: { [Key: string]: offering } = {
  "a1": {
    "regions": [
      "ap-northeast-1",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "2xlarge",
      "4xlarge",
      "large",
      "medium",
      "metal",
      "xlarge"
    ]
  },
  "c1": {
    "regions": [
      "ap-northeast-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-west-1",
      "sa-east-1",
      "us-east-1",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "medium",
      "xlarge"
    ]
  },
  "c3": {
    "regions": [
      "ap-northeast-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "sa-east-1",
      "us-east-1",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "xlarge"
    ]
  },
  "c4": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "xlarge"
    ]
  },
  "c5": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ap-southeast-4",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "18xlarge",
      "24xlarge",
      "2xlarge",
      "4xlarge",
      "9xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "c5a": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "xlarge"
    ]
  },
  "c5ad": {
    "regions": [
      "af-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-south-1",
      "eu-west-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "xlarge"
    ]
  },
  "c5d": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ap-southeast-4",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "18xlarge",
      "24xlarge",
      "2xlarge",
      "4xlarge",
      "9xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "c5n": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "18xlarge",
      "2xlarge",
      "4xlarge",
      "9xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "c6a": {
    "regions": [
      "ap-northeast-1",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "48xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "c6g": {
    "regions": [
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ap-southeast-4",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "metal",
      "xlarge"
    ]
  },
  "c6gd": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "metal",
      "xlarge"
    ]
  },
  "c6gn": {
    "regions": [
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "xlarge"
    ]
  },
  "c6i": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "c6id": {
    "regions": [
      "ap-northeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "il-central-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "c6in": {
    "regions": [
      "af-south-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "c7a": {
    "regions": [
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "48xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "metal-48xl",
      "xlarge"
    ]
  },
  "c7g": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "metal",
      "xlarge"
    ]
  },
  "c7gd": {
    "regions": [
      "ap-northeast-1",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-north-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "xlarge"
    ]
  },
  "c7gn": {
    "regions": [
      "ap-northeast-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "xlarge"
    ]
  },
  "c7i": {
    "regions": [
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "48xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal-24xl",
      "metal-48xl",
      "xlarge"
    ]
  },
  "d2": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "xlarge"
    ]
  },
  "d3": {
    "regions": [
      "ap-northeast-1",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-west-1",
      "eu-west-2",
      "il-central-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "xlarge"
    ]
  },
  "d3en": {
    "regions": [
      "ap-northeast-1",
      "ap-southeast-1",
      "eu-central-1",
      "eu-west-1",
      "us-east-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "2xlarge",
      "4xlarge",
      "6xlarge",
      "8xlarge",
      "xlarge"
    ]
  },
  "dl1": {
    "regions": [
      "us-east-1",
      "us-west-2"
    ],
    "sizes": [
      "24xlarge"
    ]
  },
  "dl2q": {
    "regions": [
      "eu-central-1",
      "us-west-2"
    ],
    "sizes": [
      "24xlarge"
    ]
  },
  "f1": {
    "regions": [
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-west-2"
    ],
    "sizes": [
      "16xlarge",
      "2xlarge",
      "4xlarge"
    ]
  },
  "g3": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "16xlarge",
      "4xlarge",
      "8xlarge"
    ]
  },
  "g3s": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "xlarge"
    ]
  },
  "g4ad": {
    "regions": [
      "ap-northeast-1",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "xlarge"
    ]
  },
  "g4dn": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "metal",
      "xlarge"
    ]
  },
  "g5": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-west-1",
      "eu-west-2",
      "il-central-1",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "48xlarge",
      "4xlarge",
      "8xlarge",
      "xlarge"
    ]
  },
  "g5g": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "eu-central-1",
      "eu-south-2",
      "us-east-1",
      "us-west-2"
    ],
    "sizes": [
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "metal",
      "xlarge"
    ]
  },
  "h1": {
    "regions": [
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge"
    ]
  },
  "hpc6a": {
    "regions": [
      "ap-southeast-1",
      "eu-north-1",
      "us-east-2"
    ],
    "sizes": [
      "48xlarge"
    ]
  },
  "hpc6id": {
    "regions": [
      "eu-north-1",
      "us-east-2"
    ],
    "sizes": [
      "32xlarge"
    ]
  },
  "hpc7a": {
    "regions": [
      "eu-west-1",
      "us-east-2"
    ],
    "sizes": [
      "12xlarge",
      "24xlarge",
      "48xlarge",
      "96xlarge"
    ]
  },
  "hpc7g": {
    "regions": [
      "ap-northeast-1",
      "eu-west-1",
      "us-east-1"
    ],
    "sizes": [
      "16xlarge",
      "4xlarge",
      "8xlarge"
    ]
  },
  "i2": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "xlarge"
    ]
  },
  "i3": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ap-southeast-4",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "i3en": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ap-southeast-4",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "24xlarge",
      "2xlarge",
      "3xlarge",
      "6xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "i4g": {
    "regions": [
      "ca-central-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "xlarge"
    ]
  },
  "i4i": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ap-southeast-4",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "im4gn": {
    "regions": [
      "ap-northeast-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "xlarge"
    ]
  },
  "inf1": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "24xlarge",
      "2xlarge",
      "6xlarge",
      "xlarge"
    ]
  },
  "inf2": {
    "regions": [
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "24xlarge",
      "48xlarge",
      "8xlarge",
      "xlarge"
    ]
  },
  "is4gen": {
    "regions": [
      "ap-northeast-1",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "xlarge"
    ]
  },
  "m1": {
    "regions": [
      "ap-northeast-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-west-1",
      "sa-east-1",
      "us-east-1",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "large",
      "medium",
      "small",
      "xlarge"
    ]
  },
  "m2": {
    "regions": [
      "ap-northeast-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-west-1",
      "sa-east-1",
      "us-east-1",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "2xlarge",
      "4xlarge",
      "xlarge"
    ]
  },
  "m3": {
    "regions": [
      "ap-northeast-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "sa-east-1",
      "us-east-1",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "2xlarge",
      "large",
      "medium",
      "xlarge"
    ]
  },
  "m4": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "10xlarge",
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "large",
      "xlarge"
    ]
  },
  "m5": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ap-southeast-4",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "m5a": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "xlarge"
    ]
  },
  "m5ad": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "xlarge"
    ]
  },
  "m5d": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ap-southeast-4",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "m5dn": {
    "regions": [
      "ap-northeast-1",
      "ap-southeast-1",
      "eu-central-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "m5n": {
    "regions": [
      "ap-northeast-1",
      "ap-southeast-1",
      "eu-central-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "m5zn": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "2xlarge",
      "3xlarge",
      "6xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "m6a": {
    "regions": [
      "ap-northeast-1",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "48xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "m6g": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ap-southeast-4",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "metal",
      "xlarge"
    ]
  },
  "m6gd": {
    "regions": [
      "af-south-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ap-southeast-4",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "metal",
      "xlarge"
    ]
  },
  "m6i": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "m6id": {
    "regions": [
      "ap-northeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-central-2",
      "eu-west-1",
      "il-central-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "m6idn": {
    "regions": [
      "ap-northeast-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-north-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "m6in": {
    "regions": [
      "ap-northeast-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-north-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "m7a": {
    "regions": [
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "48xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "metal-48xl",
      "xlarge"
    ]
  },
  "m7g": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "metal",
      "xlarge"
    ]
  },
  "m7gd": {
    "regions": [
      "ap-northeast-1",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "xlarge"
    ]
  },
  "m7i": {
    "regions": [
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "48xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal-24xl",
      "metal-48xl",
      "xlarge"
    ]
  },
  "m7i-flex": {
    "regions": [
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "xlarge"
    ]
  },
  "mac1": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-north-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "metal"
    ]
  },
  "mac2": {
    "regions": [
      "ap-southeast-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "metal"
    ]
  },
  "mac2-m2": {
    "regions": [
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "metal"
    ]
  },
  "mac2-m2pro": {
    "regions": [
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "metal"
    ]
  },
  "p2": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "16xlarge",
      "8xlarge",
      "xlarge"
    ]
  },
  "p3": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "16xlarge",
      "2xlarge",
      "8xlarge"
    ]
  },
  "p3dn": {
    "regions": [
      "ap-northeast-1",
      "eu-west-1",
      "us-east-1",
      "us-west-2"
    ],
    "sizes": [
      "24xlarge"
    ]
  },
  "p4d": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "eu-central-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "24xlarge"
    ]
  },
  "p4de": {
    "regions": [
      "il-central-1"
    ],
    "sizes": [
      "24xlarge"
    ]
  },
  "p5": {
    "regions": [
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "48xlarge"
    ]
  },
  "r3": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "xlarge"
    ]
  },
  "r4": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "xlarge"
    ]
  },
  "r5": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ap-southeast-4",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "r5a": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "xlarge"
    ]
  },
  "r5ad": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "xlarge"
    ]
  },
  "r5b": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "r5d": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ap-southeast-4",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "r5dn": {
    "regions": [
      "af-south-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-3",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "r5n": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "r6a": {
    "regions": [
      "ap-northeast-1",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "48xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "r6g": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ap-southeast-4",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "metal",
      "xlarge"
    ]
  },
  "r6gd": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "metal",
      "xlarge"
    ]
  },
  "r6i": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "r6id": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "il-central-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "r6idn": {
    "regions": [
      "ap-northeast-1",
      "ap-southeast-1",
      "eu-central-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "r6in": {
    "regions": [
      "ap-northeast-1",
      "ap-southeast-1",
      "eu-central-1",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  },
  "r7a": {
    "regions": [
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "48xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "metal-48xl",
      "xlarge"
    ]
  },
  "r7g": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "metal",
      "xlarge"
    ]
  },
  "r7gd": {
    "regions": [
      "ap-northeast-1",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "xlarge"
    ]
  },
  "r7i": {
    "regions": [
      "eu-north-1",
      "eu-south-2",
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "48xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal-24xl",
      "metal-48xl",
      "xlarge"
    ]
  },
  "r7iz": {
    "regions": [
      "us-east-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "2xlarge",
      "32xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "metal-16xl",
      "metal-32xl",
      "xlarge"
    ]
  },
  "t1": {
    "regions": [
      "ap-northeast-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-west-1",
      "sa-east-1",
      "us-east-1",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "micro"
    ]
  },
  "t2": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "2xlarge",
      "large",
      "medium",
      "micro",
      "nano",
      "small",
      "xlarge"
    ]
  },
  "t3": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ap-southeast-4",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "2xlarge",
      "large",
      "medium",
      "micro",
      "nano",
      "small",
      "xlarge"
    ]
  },
  "t3a": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "2xlarge",
      "large",
      "medium",
      "micro",
      "nano",
      "small",
      "xlarge"
    ]
  },
  "t4g": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ap-southeast-4",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "il-central-1",
      "me-central-1",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "2xlarge",
      "large",
      "medium",
      "micro",
      "nano",
      "small",
      "xlarge"
    ]
  },
  "trn1": {
    "regions": [
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "2xlarge",
      "32xlarge"
    ]
  },
  "trn1n": {
    "regions": [
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "32xlarge"
    ]
  },
  "u-12tb1": {
    "regions": [
      "ap-northeast-1",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-south-1",
      "eu-west-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "112xlarge"
    ]
  },
  "u-18tb1": {
    "regions": [
      "eu-west-1",
      "us-east-1",
      "us-west-2"
    ],
    "sizes": [
      "112xlarge"
    ]
  },
  "u-24tb1": {
    "regions": [
      "ap-northeast-2",
      "us-east-1",
      "us-west-2"
    ],
    "sizes": [
      "112xlarge"
    ]
  },
  "u-3tb1": {
    "regions": [
      "ap-northeast-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-south-1",
      "eu-west-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "56xlarge"
    ]
  },
  "u-6tb1": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "112xlarge",
      "56xlarge"
    ]
  },
  "u-9tb1": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-2",
      "ap-southeast-1",
      "eu-central-1",
      "eu-west-1",
      "us-east-1",
      "us-west-2"
    ],
    "sizes": [
      "112xlarge"
    ]
  },
  "vt1": {
    "regions": [
      "ap-northeast-1",
      "eu-west-1",
      "us-east-1",
      "us-west-2"
    ],
    "sizes": [
      "24xlarge",
      "3xlarge",
      "6xlarge"
    ]
  },
  "x1": {
    "regions": [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "16xlarge",
      "32xlarge"
    ]
  },
  "x1e": {
    "regions": [
      "af-south-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-west-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "16xlarge",
      "2xlarge",
      "32xlarge",
      "4xlarge",
      "8xlarge",
      "xlarge"
    ]
  },
  "x2gd": {
    "regions": [
      "eu-west-1",
      "us-east-1",
      "us-east-2",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "16xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "large",
      "medium",
      "metal",
      "xlarge"
    ]
  },
  "x2idn": {
    "regions": [
      "af-south-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-central-2",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-central-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "16xlarge",
      "24xlarge",
      "32xlarge",
      "metal"
    ]
  },
  "x2iedn": {
    "regions": [
      "af-south-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-south-2",
      "ap-southeast-1",
      "ap-southeast-2",
      "ap-southeast-3",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-south-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "16xlarge",
      "24xlarge",
      "2xlarge",
      "32xlarge",
      "4xlarge",
      "8xlarge",
      "metal",
      "xlarge"
    ]
  },
  "x2iezn": {
    "regions": [
      "ap-northeast-1",
      "eu-west-1",
      "us-east-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "2xlarge",
      "4xlarge",
      "6xlarge",
      "8xlarge",
      "metal"
    ]
  },
  "z1d": {
    "regions": [
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "eu-central-1",
      "eu-west-1",
      "eu-west-2",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2"
    ],
    "sizes": [
      "12xlarge",
      "2xlarge",
      "3xlarge",
      "6xlarge",
      "large",
      "metal",
      "xlarge"
    ]
  }
}