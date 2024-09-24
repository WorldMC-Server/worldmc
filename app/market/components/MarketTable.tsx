import { fetchShops } from "../actions";
import { PageControls } from "./PageControls";
import React from "react";
import ShopCard from "@/app/market/components/ShopCard";

export default async function MarketTable({ material, page }: { material: string; page: number }) {
  const shops = await fetchShops(page, material);

  return (
    <>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {shops && shops.data.map((shop) => <ShopCard key={shop.id} shop={shop} />)}
      </div>
      <PageControls totalPages={shops?.totalPages || 0} />
    </>
  );
}
