import { AccountClient, paginateListRegions } from "@aws-sdk/client-account"

// Create a function that will get all regions for an account
export async function getAllRegions(): Promise<string[]> {
    const accountClient = new AccountClient({ region: "us-east-1" });
    const regions: string[] = [];
    for await (const page of paginateListRegions({ client: accountClient }, {})) {
        regions.push(...page.Regions!.map(r=>{return r.RegionName!}))
    }
    return regions
}