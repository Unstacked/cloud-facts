import regions
import util
import boto3
import threading
from typing import List, Dict, Literal, Set

ALL_INSTANCE_TYPES: Set[str] = set()
ALL_INSTANCE_FAMILIES: Set[str] = set()
INSTANCE_TYPE_OFFERINGS: Dict[Literal["regions", "instances"], Dict[str, Set[str]| List[str]]] = {
        "regions": {},
        "instances": {},
    }

def GetInstanceTypes(session: boto3.Session):
        region = session.region_name
        ec2 = session.client("ec2")
        regional_instance_types = []
        for instance in ec2.describe_instance_type_offerings()["InstanceTypeOfferings"]:
            instance_type = instance["InstanceType"]
            ALL_INSTANCE_TYPES.add(instance_type)
            ALL_INSTANCE_FAMILIES.add(instance_type.split('.')[0])
            regional_instance_types.append(instance_type)
            if not instance_type in INSTANCE_TYPE_OFFERINGS["instances"].keys():
                INSTANCE_TYPE_OFFERINGS["instances"][instance_type] = set()
            INSTANCE_TYPE_OFFERINGS["instances"][instance_type].add(region)
        INSTANCE_TYPE_OFFERINGS["regions"][region] = regional_instance_types

def GetInstanceTypesForAllRegions():
    sessions: Dict[str, boto3.Session] = regions.GetSessions()
    threads: List[threading.Thread] = list()
    for region in sessions:
        thread = threading.Thread(target=GetInstanceTypes, args=(sessions[region],))
        threads.append(thread)
        thread.start()
    for thread in threads:
        thread.join()

    util.WriteFile("../data/all_instance_types.json", ALL_INSTANCE_TYPES)
    util.WriteFile("../data/all_instance_families.json", ALL_INSTANCE_FAMILIES)
    util.WriteFile("../data/instance_type_offerings.json", INSTANCE_TYPE_OFFERINGS)


if __name__ == "__main__":
    GetInstanceTypes()
