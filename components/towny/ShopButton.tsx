import React from "react";
import Link from "next/link";
import Image from "next/image";
import MinecraftIcon from "@/components/minecraft/MinecraftIcon";
import { MinecraftItemType } from "@/lib/minecraft/MinecraftEnums";
import { Shop } from "@/types/bridge";

const replaceUnderscoresWithSpaces = (input: string): string => input.replace(/_/g, " ");

interface ShopButtonProps {
  shop: Shop;
}

export default function ShopButton({ shop }: ShopButtonProps) {
  return (
    <Link href={`/market/${shop.id}`} className="btn btn-lg btn-block flex justify-between shadow">
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <Image
          src={`https://crafatar.com/avatars/${shop.owner.UUID}?size=32&default=MHF_Steve&overlay`}
          alt={`${shop.owner.name}'s Minecraft Face`}
          height={32}
          width={32}
          className="size-8 shrink-0"
        />
        <div className="min-w-0 flex-1 text-left">
          <span className="truncate">{shop.owner.name}&apos;s Shop</span>
          {shop.town && <p className="truncate text-sm font-normal text-base-content/70">{replaceUnderscoresWithSpaces(shop.town.name)}</p>}
        </div>
      </div>
      <div className="flex shrink-0 items-center space-x-1 font-normal">
        <div className="badge badge-lg whitespace-nowrap">
          <MinecraftIcon assetType={shop.item} className="mr-1 size-4" />
          {shop.amount}
        </div>
        <div className="badge badge-lg whitespace-nowrap">
          <MinecraftIcon assetType={MinecraftItemType.GOLD_INGOT} className="mr-1 size-4" />
          {shop.price}
        </div>
      </div>
    </Link>
  );
}
