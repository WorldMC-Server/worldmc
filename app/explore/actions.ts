"use server";

import { getNations, getResidents, getTowns } from "@/lib/bridge";

export async function fetchTownyObjects(page: number, query: string, type: string) {
  let data;

  switch (type) {
    case "residents":
      data = await getResidents(page, 12, query);
      break;
    case "towns":
      data = await getTowns(page, 12, query);
      break;
    case "nations":
      data = await getNations(page, 12, query);
      break;
  }

  return data;
}
