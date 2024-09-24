"use server";

import { getShops, ShopSearchProps } from "@/lib/bridge";
import { SearchProps } from "@/app/market/page";

export async function fetchShops(searchParams: SearchProps): Promise<ReturnType<typeof getShops>> {
  const shopSearchParams: ShopSearchProps = {
    page: searchParams.page ? Number(searchParams.page) : 1,
    pageSize: 12,
    query: searchParams.query || undefined,
    shopType: searchParams.shopType || undefined,
    minPrice: searchParams.minPrice ? Number(searchParams.minPrice) : undefined,
    maxPrice: searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined,
    minStock: searchParams.minStock ? Number(searchParams.minStock) : undefined,
    maxStock: searchParams.maxStock ? Number(searchParams.maxStock) : undefined,
    sort: searchParams.sort as "asc" | "desc" | undefined,
  };

  return await getShops(shopSearchParams);
}
