import SearchBar from "./components/SearchBar";
import MarketTable from "./components/MarketTable";
import { Metadata } from "next";
import { ShopSearchProps } from "@/lib/bridge";

export const revalidate = 900;

export const metadata: Metadata = {
  title: "Market",
};

export default async function Page({ searchParams }: { searchParams: ShopSearchProps }) {
  return (
    <section className="container space-y-4">
      <h1 className="text-center text-5xl font-black">Market</h1>
      <SearchBar placeholder="Search Market..." />
      <MarketTable {...searchParams} />
    </section>
  );
}
