import React from "react";
import Link from "next/link";
import { Flag } from "lucide-react";
import { replaceUnderscoresWithSpaces } from "@/lib/format";
import { PartialNation } from "@/types/bridge";

interface NationButtonProps {
  item: PartialNation;
}

export default function NationButton({ item }: NationButtonProps) {
  return (
    <Link href={`/nations/${item.UUID}`} className="btn btn-lg btn-block justify-between shadow">
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <span className="truncate">{replaceUnderscoresWithSpaces(item.name)}</span>
      </div>
      <Flag />
    </Link>
  );
}
