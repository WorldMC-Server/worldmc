import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User, Shield, Building2 } from "lucide-react";
import { replaceUnderscoresWithSpaces } from "@/lib/format";
import { PartialResident } from "@/types/bridge";

interface ResidentButtonProps {
  item: PartialResident;
  showTown?: boolean;
  showMayor?: boolean;
}

export default function ResidentButton({ item, showTown = false, showMayor = false }: ResidentButtonProps) {
  return (
    <Link href={`/residents/${item.UUID}`} className="btn btn-lg btn-block flex items-center shadow">
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <Image
          src={`https://crafatar.com/avatars/${item.UUID}?size=32&default=MHF_Steve&overlay`}
          alt={`${item.name}'s Minecraft Face`}
          height={32}
          width={32}
          className="size-8 shrink-0"
        />
        <span className="truncate leading-normal">{item.name}</span>
        {showMayor && (
          <div className="badge badge-lg whitespace-nowrap font-normal">
            <Shield className="mr-1 size-4" />
            Mayor
          </div>
        )}
        {showTown && item.town && (
          <div className="badge badge-lg whitespace-nowrap font-normal">
            <Building2 className="mr-1 size-4" />
            <span className="truncate">{replaceUnderscoresWithSpaces(item.town.name)}</span>
          </div>
        )}
      </div>
      <User className="ml-2 shrink-0" />
    </Link>
  );
}
