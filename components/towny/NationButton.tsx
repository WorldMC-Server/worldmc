import React from "react";
import Link from "next/link";
import { Flag } from "lucide-react";

const replaceUnderscoresWithSpaces = (input: string): string => input.replace(/_/g, " ");

interface NationButtonProps {
  item: {
    UUID: string;
    name: string;
  };
}

export default function NationButton({ item }: NationButtonProps) {
  return (
    <Link href={`/nations/${item.UUID}`} className="btn btn-lg btn-block justify-between shadow">
      <div className="flex items-center gap-4">{replaceUnderscoresWithSpaces(item.name)}</div>
      <Flag />
    </Link>
  );
}
