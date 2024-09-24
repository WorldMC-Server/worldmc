import React from "react";
import Image from "next/image";
import MinecraftIcon from "@/components/minecraft/MinecraftIcon";
import { MinecraftItemType } from "@/lib/minecraft/MinecraftEnums";
import { Shop } from "@/types/bridge";
import { convertToTitleCase, replaceUnderscoresWithSpaces } from "@/lib/format";
import clsx from "clsx";
import { Building2, PackageOpen } from "lucide-react";

interface ShopButtonProps {
  shop: Shop;
}

export default function ShopCard({ shop }: ShopButtonProps) {
  return (
    <div key={shop.id} className="card card-compact bg-base-200 shadow">
      <div className="card-body">
        <h2 className="card-title">
          <Image
            src={`https://crafatar.com/avatars/${shop.owner.UUID}?size=32&default=MHF_Steve&overlay`}
            alt={`${shop.owner.name}'s Minecraft Face`}
            height={32}
            width={32}
            className="size-8 shrink-0"
          />
          {shop.owner.name}&apos;s Shop
          <div className={clsx("badge", shop.stock >= shop.amount ? "badge-success" : "badge-error")}>
            {shop.stock >= shop.amount ? "In Stock" : "Out of Stock"}
          </div>
        </h2>

        <div className="flex flex-wrap gap-2">
          <div className="badge badge-lg whitespace-nowrap">
            <MinecraftIcon assetType={shop.item} className="mr-1 size-4" />
            {convertToTitleCase(replaceUnderscoresWithSpaces(shop.item))}
          </div>
          <div className="badge badge-lg whitespace-nowrap">
            <MinecraftIcon assetType={MinecraftItemType.GOLD_INGOT} className="mr-1 size-4" />
            {shop.price} per {shop.amount}x
          </div>
          <div className="badge badge-lg whitespace-nowrap">
            <PackageOpen className="mr-1 size-4" />
            {shop.stock}
          </div>
          {shop.town && (
            <div className="badge badge-lg whitespace-nowrap">
              <Building2 className="mr-1 size-4" />
              {replaceUnderscoresWithSpaces(shop.town.name)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
