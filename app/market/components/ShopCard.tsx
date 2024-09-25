import React from "react";
import Image from "next/image";
import MinecraftIcon from "@/components/minecraft/MinecraftIcon";
import { MinecraftItemType } from "@/lib/minecraft/MinecraftEnums";
import { Shop } from "@/types/bridge";
import { convertToTitleCase, replaceUnderscoresWithSpaces } from "@/lib/format";
import clsx from "clsx";
import { Building2, Map, PackageOpen } from "lucide-react";
import Link from "next/link";

interface ShopButtonProps {
  shop: Shop;
}

export default function ShopCard({ shop }: ShopButtonProps) {
  const getStockStatusBadge = () => {
    if (shop.isBuying) {
      return shop.space > 0 ? "badge-success" : "badge-error";
    } else {
      return shop.stock > 0 ? "badge-success" : "badge-error";
    }
  };

  const getStockStatusLabel = () => {
    if (shop.isBuying) {
      return shop.space > 0 ? "Buying" : "Not Buying";
    } else {
      return shop.stock > 0 ? "In Stock" : "Out of Stock";
    }
  };

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
          <span className="truncate">{shop.owner.name}&apos;s Shop</span>
          <div className={clsx("badge whitespace-nowrap", shop.isBuying ? "badge-primary" : "badge-secondary", getStockStatusBadge())}>
            {getStockStatusLabel()}
          </div>
        </h2>

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            <div className="badge badge-lg whitespace-nowrap">
              <MinecraftIcon assetType={shop.item} className="mr-1 size-4" />
              {convertToTitleCase(replaceUnderscoresWithSpaces(shop.item))}
            </div>
            <div className="badge badge-lg whitespace-nowrap">
              <MinecraftIcon assetType={MinecraftItemType.GOLD_INGOT} className="mr-1 size-4" />
              {shop.price} per {shop.amount}x
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="badge badge-lg whitespace-nowrap">
              <PackageOpen className="mr-1 size-4" />
              {shop.isBuying ? `Space: ${shop.space}` : `Stock: ${shop.stock > 0 ? shop.stock : 0}`}
            </div>
            {shop.town && (
              <div className="badge badge-lg whitespace-nowrap">
                <Building2 className="mr-1 size-4" />
                {replaceUnderscoresWithSpaces(shop.town.name)}
              </div>
            )}
          </div>
          <div className="badge badge-info badge-lg whitespace-nowrap">
            <Map className="mr-1 size-4" />
            {shop.location.x}, {shop.location.z}
          </div>
        </div>

        <div className="card-actions justify-end">
          <Link
            href={`https://map.worldmc.net/?world=minecraft_overworld&zoom=6&x=${shop.location.x}&z=${shop.location.z}`}
            target="_blank"
            className="btn btn-primary"
          >
            View on Map
          </Link>
        </div>
      </div>
    </div>
  );
}
