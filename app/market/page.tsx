import SearchBar from "./components/SearchBar";
import MarketTable from "./components/MarketTable";
import { Metadata } from "next";

export const revalidate = 900;

export const metadata: Metadata = {
  title: "Market",
};

export interface SearchProps {
  page?: number;
  query?: string;
  shopType?: "buying" | "selling";
  minPrice?: string;
  maxPrice?: string;
  minStock?: string;
  maxStock?: string;
  sort?: "asc" | "desc";
}

export default async function Page({ searchParams }: { searchParams: SearchProps }) {
  return (
    <section className="container space-y-4">
      <h1 className="text-center text-5xl font-black">Market</h1>
      <SearchBar placeholder="Search Market..." />
      <MarketTable {...searchParams} />
    </section>
  );
}
