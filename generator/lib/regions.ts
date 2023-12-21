import { AccountClient, paginateListRegions, EnableRegionCommand, ListRegionsCommand, RegionOptStatus } from '@aws-sdk/client-account';
import { writeDataToFile } from './util';

// Create a function that will get all regions for an account
export async function getAllRegions(): Promise<string[]> {
  const accountClient = new AccountClient({ region: 'us-east-1' });
  const regions: string[] = [];
  for await (const page of paginateListRegions({ client: accountClient }, {})) {
    regions.push(
      ...page.Regions!.map((r) => {
        if (r.RegionOptStatus == "DISABLED") {
          const enableCommand = new EnableRegionCommand({ RegionName: r.RegionName! });
          accountClient.send(enableCommand);
        }
        return r.RegionName!;
      })
    );
  }
  const listCommand = new ListRegionsCommand({RegionOptStatusContains: [RegionOptStatus.ENABLING]});
  for (let output = await accountClient.send(listCommand); output.Regions!.length > 0; output = await accountClient.send(listCommand)) {
    console.log("Regions still being enabled: ", output.Regions);
    await new Promise(r => setTimeout(r, 5000));
  }
  writeDataToFile(
    "src/lib/regions.json",
    regions,
  );
  return regions;
}
