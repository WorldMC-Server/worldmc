import fs from "fs";
import path from "path";

const BLOCK_DIR = "/worldmc/public/minecraft/block/";
const ITEM_DIR = "/worldmc/public//minecraft/item/";

function getFilesInDirectory(directory: string): string[] {
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".png"))
    .map((file) => path.parse(file).name);
}

function generateEnumString(name: string, values: string[]): string {
  const enumValues = values
    .map((value) => {
      const enumKey = value.toUpperCase().replace(/-/g, "_");
      return `  ${enumKey} = "${value}",`;
    })
    .join("\n");

  return `export enum ${name} {\n${enumValues}\n}`;
}

const blockTypes = getFilesInDirectory(BLOCK_DIR);
const itemTypes = getFilesInDirectory(ITEM_DIR);

export default function Generate() {
  const minecraftBlockTypeEnum = generateEnumString("MinecraftBlockType", blockTypes);
  const minecraftItemTypeEnum = generateEnumString("MinecraftItemType", itemTypes);

  console.log("// Minecraft Block Types");
  console.log(minecraftBlockTypeEnum);
  console.log("\n// Minecraft Item Types");
  console.log(minecraftItemTypeEnum);
}
