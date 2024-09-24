"use client";

import { ChangeEvent, useState } from "react";
import { Search, ChevronDown, TrendingDown, TrendingUp } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { z } from "zod";

const numericInputSchema = z.object({
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
  minStock: z.coerce.number().min(0).optional(),
  maxStock: z.coerce.number().min(0).optional(),
});

export default function SearchBar({ placeholder }: { placeholder: string }): JSX.Element {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = useDebouncedCallback((updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (numericInputSchema.shape.hasOwnProperty(key)) {
        try {
          const parsed = numericInputSchema.shape[key as keyof typeof numericInputSchema.shape].parse(value);
          if (parsed !== undefined && parsed !== null) {
            params.set(key, parsed.toString());
          } else {
            params.delete(key);
          }
          setErrors((prev) => ({ ...prev, [key]: "" }));
        } catch (error) {
          if (error instanceof z.ZodError) {
            setErrors((prev) => ({ ...prev, [key]: error.errors[0].message }));
          }
          return;
        }
      } else {
        // Handle non-numeric inputs
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      }
    });

    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const updateValue = type === "checkbox" ? (e.target as HTMLInputElement).checked.toString() : value;
    handleChange({ [name]: updateValue });
  };

  const currentSort = searchParams.get("sort") || "desc";
  const currentShopType = searchParams.get("shopType") || "all";

  return (
    <div className="space-y-4">
      <div className="card card-compact bg-base-200 shadow">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Shop Type</span>
            </label>
            <select name="shopType" onChange={handleInputChange} value={currentShopType} className="select select-bordered w-full">
              <option value="selling">Selling Shops</option>
              <option value="buying">Buying Shops</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price Range</span>
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                name="minPrice"
                placeholder="Min"
                defaultValue={searchParams.get("minPrice") || ""}
                onChange={handleInputChange}
                className={`input input-sm input-bordered w-full ${errors.minPrice ? "input-error" : ""}`}
              />
              <input
                type="number"
                name="maxPrice"
                placeholder="Max"
                defaultValue={searchParams.get("maxPrice") || ""}
                onChange={handleInputChange}
                className={`input input-sm input-bordered w-full ${errors.maxPrice ? "input-error" : ""}`}
              />
            </div>
            {(errors.minPrice || errors.maxPrice) && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.minPrice || errors.maxPrice}</span>
              </label>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">{currentShopType === "buying" ? "Space Range" : "Stock Range"}</span>
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                name="minStock"
                placeholder="Min"
                defaultValue={searchParams.get("minStock") || ""}
                onChange={handleInputChange}
                className={`input input-sm input-bordered w-full ${errors.minStock ? "input-error" : ""}`}
              />
              <input
                type="number"
                name="maxStock"
                placeholder="Max"
                defaultValue={searchParams.get("maxStock") || ""}
                onChange={handleInputChange}
                className={`input input-sm input-bordered w-full ${errors.maxStock ? "input-error" : ""}`}
              />
            </div>
            {(errors.minStock || errors.maxStock) && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.minStock || errors.maxStock}</span>
              </label>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <label className="input input-bordered flex w-full items-center gap-2">
          <Search className="flex-shrink-0 opacity-70" />
          <input
            type="text"
            name="query"
            placeholder={placeholder}
            defaultValue={searchParams.get("query")?.toString()}
            aria-label={placeholder}
            onChange={handleInputChange}
            className="w-full min-w-0"
          />
        </label>

        <div className="dropdown dropdown-end flex-none">
          <button tabIndex={0} className="btn">
            {currentSort === "asc" ? "Value Ascending" : "Value Descending"} <ChevronDown />
          </button>
          <ul tabIndex={0} className="menu dropdown-content menu-sm z-[1] mt-1 w-52 rounded-box bg-base-200 p-2 shadow">
            <li>
              <button onClick={() => handleChange({ sort: "desc" })}>
                <TrendingDown className="size-4" /> Value Descending
              </button>
            </li>
            <li>
              <button onClick={() => handleChange({ sort: "asc" })}>
                <TrendingUp className="size-4" /> Value Ascending
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
