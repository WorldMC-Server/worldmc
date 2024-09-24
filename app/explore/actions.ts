"use server";

import { getNations, getResidents, getTowns, BaseSearchProps } from "@/lib/bridge";

type TownyObjectType = "residents" | "towns" | "nations";

export async function fetchTownyObjects(type: TownyObjectType, searchParams: { page?: number; query?: string }) {
  const { page = 1, query } = searchParams;

  const params: BaseSearchProps = {
    page: page,
    pageSize: 12,
    query,
  };

  let data;

  switch (type) {
    case "residents":
      data = await getResidents(params);
      break;
    case "towns":
      data = await getTowns(params);
      break;
    case "nations":
      data = await getNations(params);
      break;
    default:
      throw new Error(`Invalid type: ${type}`);
  }

  return data;
}
