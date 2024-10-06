import { MinecraftRecipeProps } from "./components/MinecraftRecipe";
import { MinecraftBlockType, MinecraftItemType } from "@/lib/minecraft/MinecraftEnums";

export const recipes: MinecraftRecipeProps[] = [
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
  {
    title: "Suspicious Sand",
    ingredients: [
      MinecraftBlockType.SAND,
      MinecraftBlockType.SAND,
      MinecraftBlockType.SAND,
      MinecraftBlockType.COARSE_DIRT,
      MinecraftItemType.CLAY_BALL,
      MinecraftBlockType.SAND,
      MinecraftBlockType.COARSE_DIRT,
      MinecraftBlockType.COARSE_DIRT,
      MinecraftBlockType.COARSE_DIRT,
    ],
    result: MinecraftBlockType.SUSPICIOUS_SAND_0,
  },
  {
    title: "Suspicious Gravel",
    ingredients: [
      MinecraftBlockType.GRAVEL,
      MinecraftBlockType.GRAVEL,
      MinecraftBlockType.GRAVEL,
      MinecraftBlockType.COARSE_DIRT,
      MinecraftItemType.CLAY_BALL,
      MinecraftBlockType.GRAVEL,
      MinecraftBlockType.COARSE_DIRT,
      MinecraftBlockType.COARSE_DIRT,
      MinecraftBlockType.COARSE_DIRT,
    ],
    result: MinecraftBlockType.SUSPICIOUS_GRAVEL_0,
  },
];
