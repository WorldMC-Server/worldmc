import { getEnvironment } from "./environment";
import type { PartialResident, PartialTown, Resident, Town, PartialNation, Nation, PaginatedResult, Shop } from "@/types/bridge";

const API_BASE_URL = getEnvironment() === "development" ? "https://towny.worldmc.net/dev" : "https://towny.worldmc.net";

export interface BaseSearchProps {
  page: number;
  pageSize: number;
  query?: string;
}

export interface ShopSearchProps extends BaseSearchProps {
  shopType?: "buying" | "selling";
  minPrice?: number;
  maxPrice?: number;
  minStock?: number;
  maxStock?: number;
  sort?: "asc" | "desc";
}

function convertToURLSearchParams(props: BaseSearchProps | ShopSearchProps): URLSearchParams {
  const params = new URLSearchParams();

  params.append("page", props.page.toString());
  params.append("pageSize", props.pageSize.toString());
  if (props.query) params.append("query", props.query);

  if ("minPrice" in props) {
    const shopProps = props as ShopSearchProps;

    if (shopProps.shopType) params.append("shopType", shopProps.shopType);
    if (shopProps.minPrice) params.append("minPrice", shopProps.minPrice.toString());
    if (shopProps.maxPrice) params.append("maxPrice", shopProps.maxPrice.toString());
    if (shopProps.minStock) params.append("minStock", shopProps.minStock.toString());
    if (shopProps.maxStock) params.append("maxStock", shopProps.maxStock.toString());
    if (shopProps.sort) params.append("sort", shopProps.sort);
  }

  return params;
}

async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = new Headers(options.headers);
  headers.set("apiKey", process.env.BRIDGE_KEY!);

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Bridge request failed: ${response.statusText}`);
  }

  return response.json();
}

// Nations
export async function getNations(props: BaseSearchProps): Promise<PaginatedResult<PartialNation>> {
  const params = convertToURLSearchParams(props);
  return apiRequest<PaginatedResult<PartialNation>>(`/nations?${params.toString()}`);
}

export async function getNation(UUID: string): Promise<Nation> {
  return apiRequest<Nation>(`/nations/${UUID}`);
}

// Towns
export async function getTowns(props: BaseSearchProps): Promise<PaginatedResult<PartialTown>> {
  const params = convertToURLSearchParams(props);
  return apiRequest<PaginatedResult<PartialTown>>(`/towns?${params.toString()}`);
}

export async function getTown(UUID: string): Promise<Town> {
  return apiRequest<Town>(`/towns/${UUID}`);
}

// Residents
export async function getResidents(props: BaseSearchProps): Promise<PaginatedResult<PartialResident>> {
  const params = convertToURLSearchParams(props);
  return apiRequest<PaginatedResult<PartialResident>>(`/residents?${params.toString()}`);
}

export async function getResident(UUID: string): Promise<Resident> {
  return apiRequest<Resident>(`/residents/${UUID}`);
}

// Shops
export async function getShops(props: ShopSearchProps): Promise<PaginatedResult<Shop>> {
  const params = convertToURLSearchParams(props);
  console.log(`/shops?${params.toString()}`);
  return apiRequest<PaginatedResult<Shop>>(`/shops?${params.toString()}`);
}

export { convertToURLSearchParams, apiRequest };
