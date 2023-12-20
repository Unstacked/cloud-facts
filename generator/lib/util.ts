
import { writeFileSync, rmSync, mkdirSync } from 'fs';

import gitRootDir from 'git-root-dir';

export let filesWritten = 0;

export async function writeContentDir(name: string, data: { [key: string]: any }) {
    rmSync(`src/content/${name}`, { recursive: true, force: true });
    mkdirSync(`src/content/${name}`);
    for (let key of Object.keys(data)) {
        writeDataToFile(`src/content/${name}/${key}.json`, data[key]);
    }
}

export async function writeDataToFile(path: string, data: any) {
    filesWritten++;
    writeFileSync(`${await gitRootDir()}/${path}`, JSON.stringify(data, null, 2));
}