"use client";

import { ChangeEvent, useState } from "react";
import { Search, ChevronDown, TrendingDown, TrendingUp } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { z } from "zod";

const searchParamsSchema = z.object({
  query: z.string().optional(),
  shopType: z.enum(["selling", "buying"]).optional(),
  sort: z.enum(["asc", "desc"]).optional(),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
  minStock: z.coerce.number().min(0).optional(),
  maxStock: z.coerce.number().min(0).optional(),
});

type SearchParams = z.infer<typeof searchParamsSchema>;

export default function SearchBar({ placeholder }: { placeholder: string }): JSX.Element {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [errors, setErrors] = useState<Partial<Record<keyof SearchParams, string>>>({});

  const handleChange = useDebouncedCallback((updates: Partial<SearchParams>) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    const newParams = { ...currentParams, ...updates };

    try {
      const validatedParams = searchParamsSchema.parse(newParams);
      const params = new URLSearchParams();
      Object.entries(validatedParams).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          params.set(key, value.toString());
        }
      });
      params.set("page", "1");
      replace(`${pathname}?${params.toString()}`);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof SearchParams, string>> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0] as keyof SearchParams] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  }, 300);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    handleChange({ [name]: value } as Partial<SearchParams>);
  };

  const currentParams = Object.fromEntries(searchParams.entries()) as SearchParams;

  return (
    <div className="space-y-4">
      <div className="card card-compact bg-base-200 shadow">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Shop Type</span>
            </label>
            <select
              name="shopType"
              onChange={handleInputChange}
              value={currentParams.shopType || "selling"}
              className="select select-bordered w-full"
            >
              <option value="selling">Selling Shops</option>
              <option value="buying">Buying Shops</option>
            </select>
            {errors.shopType && <span className="text-sm text-error">{errors.shopType}</span>}
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
                value={currentParams.minPrice || ""}
                onChange={handleInputChange}
                className={`input input-sm input-bordered w-full ${errors.minPrice ? "input-error" : ""}`}
              />
              <input
                type="number"
                name="maxPrice"
                placeholder="Max"
                value={currentParams.maxPrice || ""}
                onChange={handleInputChange}
                className={`input input-sm input-bordered w-full ${errors.maxPrice ? "input-error" : ""}`}
              />
            </div>
            {(errors.minPrice || errors.maxPrice) && <span className="text-sm text-error">{errors.minPrice || errors.maxPrice}</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">{currentParams.shopType === "buying" ? "Space Range" : "Stock Range"}</span>
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                name="minStock"
                placeholder="Min"
                value={currentParams.minStock || ""}
                onChange={handleInputChange}
                className={`input input-sm input-bordered w-full ${errors.minStock ? "input-error" : ""}`}
              />
              <input
                type="number"
                name="maxStock"
                placeholder="Max"
                value={currentParams.maxStock || ""}
                onChange={handleInputChange}
                className={`input input-sm input-bordered w-full ${errors.maxStock ? "input-error" : ""}`}
              />
            </div>
            {(errors.minStock || errors.maxStock) && <span className="text-sm text-error">{errors.minStock || errors.maxStock}</span>}
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
            value={currentParams.query || ""}
            onChange={handleInputChange}
            className="w-full min-w-0"
          />
        </label>

        <div className="dropdown dropdown-end flex-none">
          <button tabIndex={0} className="btn">
            {currentParams.sort === "asc" ? "Value Ascending" : "Value Descending"} <ChevronDown />
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
