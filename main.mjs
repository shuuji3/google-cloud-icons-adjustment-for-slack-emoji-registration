#!/usr/bin/env zx

const zipFilename = "google-cloud-icons.zip";
const extractDir = "google-cloud-icons";
const iconPackURL = `https://cloud.google.com/icons/files/${zipFilename}`;
const emojiDir = "emoji";
const prefix = "google-cloud-";

async function clean() {
  await $`rm -rf ${emojiDir} && mkdir -p ${emojiDir}`;
  await $`rm -rf ${extractDir}`;
  await $`rm -f ${zipFilename}`;
}

await clean();

await $`wget ${iconPackURL} -O ${zipFilename} 2> /dev/null`;
await $`unzip ${zipFilename} -d ${extractDir} 2> /dev/null`;
const { stdout } = await $`ls ${extractDir}`;
const iconNames = stdout.split("\n").filter((_) => _);

let count = 0;
for await (const iconName of iconNames) {
  const newName = prefix + iconName.replace(/_/g, "-");
  await $`cp ${extractDir}/${iconName}/${iconName}.png ${emojiDir}/${newName}.png`;
  count++;
}

console.log(`${count} icons copied`);
