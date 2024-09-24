import React from "react";
import { fetchTownyObjects } from "../actions";
import { PageControls } from "./PageControls";
import NationButton from "@/components/towny/NationButton";
import TownButton from "@/components/towny/TownButton";
import ResidentButton from "@/components/towny/ResidentButton";
import { PartialNation, PartialTown, PartialResident } from "@/types/bridge";

type TownyObjectType = "nations" | "towns" | "residents";

type TownyObject = PartialNation | PartialTown | PartialResident;

interface TownyTableProps {
  query?: string;
  page?: number;
  filter: string;
}

export default async function TownyTable({ query, page, filter }: TownyTableProps) {
  const townyObjectType: TownyObjectType = (filter.toLowerCase() as TownyObjectType) || "residents";
  const townyObjects = await fetchTownyObjects(townyObjectType, { page, query });

  const renderButton = (item: TownyObject) => {
    switch (townyObjectType) {
      case "nations":
        return <NationButton key={item.UUID} item={item as PartialNation} />;
      case "towns":
        return <TownButton key={item.UUID} item={item as PartialTown} />;
      case "residents":
        return <ResidentButton key={item.UUID} item={item as PartialResident} showTown={true} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="space-y-2">{townyObjects && townyObjects.data.map((item) => renderButton(item))}</div>
      <PageControls totalPages={townyObjects?.totalPages || 0} />
    </>
  );
}
