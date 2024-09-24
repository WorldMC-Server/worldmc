import { fetchShops } from "../actions";
import { PageControls } from "./PageControls";
import React from "react";
import ShopButton from "@/components/towny/ShopButton";

export default async function MarketTable({ material, page }: { material: string; page: number }) {
  const shops = await fetchShops(page, material);

  return (
    <>
      <div className="space-y-2">{shops && shops.data.map((shop) => <ShopButton key={shop.id} shop={shop} />)}</div>
      <PageControls totalPages={shops?.totalPages || 0} />
    </>
  );
}
