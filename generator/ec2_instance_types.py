import regions
import util
import boto3
import threading
import mypy_boto3_ec2
import mypy_boto3_ec2.type_defs as ec2_types
from typing import List, Dict, Literal, Set

ALL_INSTANCE_TYPES: Set[str] = set()
ALL_INSTANCE_FAMILIES: Set[str] = set()
INSTANCE_TYPE_OFFERINGS: Dict[
    Literal["regions", "instances", "families"], Dict[str, Set[str] | List[str]]
] = {
    "regions": {},
    "instances": {},
}
FAMILY_OFFERINGS: Dict[str, Dict[Literal["sizes", "regions"], Set[str]]] = {}


def GetInstanceTypes(ec2: mypy_boto3_ec2.Client, *, next_token=""):
    response = (
        ec2.describe_instance_types(NextToken=next_token)
        if next_token
        else ec2.describe_instance_types()
    )
    for instance_type in response["InstanceTypes"]:
        util.WriteFile(
            f"../frontend/src/content/instance-types/{instance_type['InstanceType']}.json",
            instance_type,
        )
    if "NextToken" in response:
        GetInstanceTypes(ec2, next_token=response["NextToken"])
        return


def GetInstanceOfferings(session: boto3.Session):
    region = session.region_name
    print(f"Getting Instance Offerings for {region}")
    ec2 = session.client("ec2")
    regional_instance_types = []
    for instance in ec2.describe_instance_type_offerings()["InstanceTypeOfferings"]:
        instance_type = instance["InstanceType"]
        ALL_INSTANCE_TYPES.add(instance_type)
        family = instance_type.split(".")[0]
        size = instance_type.split(".")[1]
        ALL_INSTANCE_FAMILIES.add(family)
        if not family in FAMILY_OFFERINGS:
            FAMILY_OFFERINGS[family] = {
                "regions": set(),
                "sizes": set(),
            }
        FAMILY_OFFERINGS[family]["regions"].add(region)
        FAMILY_OFFERINGS[family]["sizes"].add(size)
        regional_instance_types.append(instance_type)
        if not instance_type in INSTANCE_TYPE_OFFERINGS["instances"].keys():
            INSTANCE_TYPE_OFFERINGS["instances"][instance_type] = set()
        INSTANCE_TYPE_OFFERINGS["instances"][instance_type].add(region)
    INSTANCE_TYPE_OFFERINGS["regions"][region] = regional_instance_types
    print(f"Finished getting instance offerings for {region}")


def GetInstanceTypesForAllRegions():
    sessions: Dict[str, boto3.Session] = regions.GetSessions()
    threads: List[threading.Thread] = list()
    for region in sessions:
        thread = threading.Thread(target=GetInstanceOfferings, args=(sessions[region],))
        threads.append(thread)
        thread.start()
    GetInstanceTypes(sessions["us-east-1"].client("ec2"))
    for thread in threads:
        thread.join()

    util.WriteFile("../data/all_instance_types.json", ALL_INSTANCE_TYPES)
    util.WriteFile("../data/all_instance_families.json", ALL_INSTANCE_FAMILIES)
    util.WriteFile("../data/instance_type_offerings.json", INSTANCE_TYPE_OFFERINGS)
    util.WriteTypedFile(
        "../data/family_offerings.ts",
        FAMILY_OFFERINGS,
        """interface offering {
  regions: string[],
  sizes: string[],
}

export const offerings: { [Key: string]: offering }""",
    )


if __name__ == "__main__":
    GetInstanceOfferings()
