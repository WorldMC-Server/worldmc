import { SearchBar } from "./components/SearchBar";
import MarketTable from "./components/MarketTable";
import { Metadata } from "next";

export const revalidate = 900;

export const metadata: Metadata = {
  title: "Market",
};

export default async function Page({ searchParams }: { searchParams: { material?: string; page?: string; filter?: string } }) {
  const page = Number(searchParams?.page || 1);
  const material = searchParams?.material || "diamond";
  const filter = searchParams?.filter || "";

  return (
    <section className="container space-y-4 text-center">
      <h1 className="text-5xl font-black">Market</h1>
      <SearchBar placeholder="Search Market..." />
      <MarketTable page={page} material={material} filter={filter} />
    </section>
  );
}
