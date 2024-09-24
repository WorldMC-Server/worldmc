import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Building2, Landmark, Users } from "lucide-react";
import { replaceUnderscoresWithSpaces } from "@/lib/format";
import { PartialTown } from "@/types/bridge";

interface TownButtonProps {
  item: PartialTown;
  showCapital?: boolean;
}

export default function TownButton({ item, showCapital = false }: TownButtonProps) {
  return (
    <Link href={`/towns/${item.UUID}`} className={twMerge("btn btn-lg btn-block justify-between shadow")}>
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <span className="truncate">{replaceUnderscoresWithSpaces(item.name)}</span>
        <div className="badge badge-lg whitespace-nowrap font-normal">
          <Users className="mr-1 size-4" />
          {item.numResidents}
        </div>
        {showCapital && (
          <div className="badge badge-lg whitespace-nowrap font-normal">
            <Landmark className="mr-1 size-4" />
            Capital
          </div>
        )}
      </div>
      <Building2 className="shrink-0" />
    </Link>
  );
}
