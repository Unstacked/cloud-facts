import regions
import ec2_instance_types
import sys
import os
import shutil

if __name__ == "__main__":
    for arg in sys.argv:
        match arg:
            case "--delete":
                shutil.rmtree("../data")
                os.mkdir("../data")
                break

    regions.GetRegions()

    ec2_instance_types.GetInstanceTypesForAllRegions()