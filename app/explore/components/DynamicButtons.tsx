"use client";

import React, { useState, useEffect, useRef } from "react";
import NationButton from "@/components/towny/NationButton";
import TownButton from "@/components/towny/TownButton";
import ResidentButton from "@/components/towny/ResidentButton";
import { PaginatedResult, PartialNation, PartialResident, PartialTown } from "@/types/bridge";

type TownyObjectType = "nations" | "towns" | "residents";

type TownyObject = PartialNation | PartialTown | PartialResident;

type TownyTableClientProps = {
  townyObjects: PaginatedResult<TownyObject> | undefined;
  townyObjectType: TownyObjectType;
};

export default function DynamicButtons({ townyObjects, townyObjectType }: TownyTableClientProps) {
  const [visibleItems, setVisibleItems] = useState<number>(0);
  const [key, setKey] = useState<number>(0);
  const prevDataRef = useRef<TownyObject[]>();

  const ButtonComponent = {
    nations: NationButton,
    towns: TownButton,
    residents: ResidentButton,
  }[townyObjectType];

  useEffect(() => {
    if (townyObjects && JSON.stringify(townyObjects.data) !== JSON.stringify(prevDataRef.current)) {
      setVisibleItems(0);
      setKey((prev) => prev + 1);
      prevDataRef.current = townyObjects.data;
    }
  }, [townyObjects]);

  useEffect(() => {
    if (townyObjects && visibleItems < townyObjects.data.length) {
      const timer = setTimeout(() => {
        setVisibleItems((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [townyObjects, visibleItems]);

  if (!townyObjects) {
    return null;
  }

  return (
    <div key={key}>
      <div className="space-y-2">
        {townyObjects.data.slice(0, visibleItems).map((item) => (
          <ButtonComponent key={item.UUID} item={item} {...(townyObjectType === "residents" && { showTown: true })} />
        ))}
      </div>
    </div>
  );
}
