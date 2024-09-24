import { MinecraftRecipeProps } from "./components/MinecraftRecipe";
import { MinecraftBlockType, MinecraftItemType } from "@/lib/minecraft/MinecraftEnums";

const recipes: MinecraftRecipeProps[] = [
  {
    title: "Prismarine Shard",
    ingredients: [null, null, null, MinecraftBlockType.SAND, MinecraftBlockType.DIRT, MinecraftItemType.LAPIS_LAZULI, null, null, null],
    result: MinecraftItemType.PRISMARINE_SHARD,
  },
  {
    title: "Prismarine Crystals",
    ingredients: [null, null, null, null, MinecraftItemType.PRISMARINE_SHARD, MinecraftItemType.GLOWSTONE_DUST, null, null, null],
    result: MinecraftItemType.PRISMARINE_CRYSTALS,
  },
  {
    title: "Cobweb",
    ingredients: [
      MinecraftItemType.STRING,
      MinecraftItemType.STRING,
      MinecraftItemType.STRING,
      MinecraftItemType.STRING,
      MinecraftItemType.STRING,
      MinecraftItemType.STRING,
      MinecraftItemType.STRING,
      MinecraftItemType.STRING,
      MinecraftItemType.STRING,
    ],
    result: MinecraftBlockType.COBWEB,
  },
  {
    title: "Powered Rail",
    ingredients: [
      MinecraftItemType.IRON_INGOT,
      null,
      MinecraftItemType.IRON_INGOT,
      MinecraftItemType.IRON_INGOT,
      MinecraftItemType.STICK,
      MinecraftItemType.IRON_INGOT,
      MinecraftItemType.IRON_INGOT,
      MinecraftItemType.REDSTONE,
      MinecraftItemType.IRON_INGOT,
    ],
    result: MinecraftBlockType.POWERED_RAIL,
  },
];

export default recipes;
