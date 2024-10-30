import { getEnvironment } from "./environment";
import type { PartialResident, PartialTown, Resident, Town, PartialNation, Nation, PaginatedResult, Shop } from "@/types/bridge";

const API_BASE_URL = getEnvironment() === "development" ? "https://towny.worldmc.net/dev" : "http://minecraft_earth:7700";

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

  Object.entries(props).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.append(key, value.toString());
    }
  });

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
  return apiRequest<PaginatedResult<Shop>>(`/shops?${params.toString()}`);
}

export { convertToURLSearchParams, apiRequest };
