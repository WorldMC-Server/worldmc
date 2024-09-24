"use server";

import { getShops, ShopSearchProps } from "@/lib/bridge";

export async function fetchShops(searchParams: ShopSearchProps): Promise<ReturnType<typeof getShops>> {
  return await getShops(searchParams);
}
