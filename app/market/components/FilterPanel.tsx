"use client";

import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function FilterPanel() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [minStock, setMinStock] = useState(searchParams.get("minStock") || "");
  const [maxStock, setMaxStock] = useState(searchParams.get("maxStock") || "");
  const [showOutOfStock, setShowOutOfStock] = useState(searchParams.get("showOutOfStock") === "true");

  const applyFilters = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams);

    if (minPrice) params.set("minPrice", minPrice);
    else params.delete("minPrice");

    if (maxPrice) params.set("maxPrice", maxPrice);
    else params.delete("maxPrice");

    if (minStock) params.set("minStock", minStock);
    else params.delete("minStock");

    if (maxStock) params.set("maxStock", maxStock);
    else params.delete("maxStock");

    params.set("showOutOfStock", showOutOfStock.toString());
    params.set("page", "1");

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleInputChange = (setter: Dispatch<SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
    applyFilters();
  };

  const handleToggleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowOutOfStock(e.target.checked);
    applyFilters();
  };

  return (
    <div className="card card-compact bg-base-200 shadow">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price Range</span>
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={handleInputChange(setMinPrice)}
              className="input input-sm input-bordered w-full"
            />
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={handleInputChange(setMaxPrice)}
              className="input input-sm input-bordered w-full"
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Stock Range</span>
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={minStock}
              onChange={handleInputChange(setMinStock)}
              className="input input-sm input-bordered w-full"
            />
            <input
              type="number"
              placeholder="Max"
              value={maxStock}
              onChange={handleInputChange(setMaxStock)}
              className="input input-sm input-bordered w-full"
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Show Out of Stock</span>
            <input type="checkbox" className="toggle toggle-primary" checked={showOutOfStock} onChange={handleToggleChange} />
          </label>
        </div>
      </div>
    </div>
  );
}
