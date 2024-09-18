import React from "react";
import { fetchTownyObjects } from "../actions";
import { PageControls } from "./PageControls";
import DynamicButtons from "@/app/explore/components/DynamicButtons";

type TownyObjectType = "nations" | "towns" | "residents";

export default async function TownyTable({ query, page, filter }: { query: string; page: number; filter: string }) {
  const townyObjectType: TownyObjectType = (filter.toLowerCase() as TownyObjectType) || "residents";
  const townyObjects = await fetchTownyObjects(page, query, townyObjectType);

  return (
    <>
      <DynamicButtons townyObjects={townyObjects} townyObjectType={townyObjectType} />
      <PageControls totalPages={townyObjects?.totalPages || 0} />
    </>
  );
}
