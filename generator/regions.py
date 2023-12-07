import boto3
import util
from typing import Dict, Set

REGIONS: Set[str] = set()
SESSIONS: Dict[str, boto3.Session] = {}

account = boto3.client("account")

def GetRegions(*, next_token=""):
    if len(REGIONS) > 0 and not next_token:
        return REGIONS
    response = account.list_regions(MaxResults=50) if next_token else account.list_regions()
    for region in response["Regions"]:
        REGIONS.add(region["RegionName"])
    if "NextToken" in response:
        GetRegions(next_token=response["NextToken"])
        return
    
    util.WriteFile("../data/regions.json", REGIONS)
    return REGIONS

def GetSessions() -> Dict[str, boto3.Session]:
    GetRegions()
    for region in list(REGIONS):
        SESSIONS[region] = boto3.Session(region_name=region)
    return SESSIONS