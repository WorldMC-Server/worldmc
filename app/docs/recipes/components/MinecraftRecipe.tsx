import React from "react";
import { Equal } from "lucide-react";
import MinecraftIcon from "@/components/minecraft/MinecraftIcon";
import { MinecraftBlockType, MinecraftItemType } from "@/lib/minecraft/MinecraftEnums";

export interface MinecraftRecipeProps {
  title: string;
  ingredients: (MinecraftItemType | MinecraftBlockType | null)[];
  result: MinecraftItemType | MinecraftBlockType;
}

const MinecraftRecipe: React.FC<MinecraftRecipeProps> = ({ title, ingredients, result }) => {
  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold">{title}</h2>
      <div className="flex w-fit items-center gap-2 rounded-box bg-base-300 p-2">
        <div className="grid w-fit grid-cols-3 grid-rows-3 gap-2 bg-base-100 p-2">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="size-12 bg-base-200">
              {ingredients[index] && <MinecraftIcon assetType={ingredients[index]} className="size-full bg-base-200" />}
            </div>
          ))}
        </div>
        <Equal />
        <div className="bg-base-100 p-2">
          <MinecraftIcon assetType={result} className="size-12 bg-base-200" />
        </div>
      </div>
    </div>
  );
};

export default MinecraftRecipe;
