import React from "react";
import { Book } from "lucide-react";
import { Metadata } from "next";
import { ruleCategories } from "@/app/docs/rules/rules";

export const metadata: Metadata = {
  title: "Rules",
};

export default function RulesPage() {
  const getMarkerContent = (categoryIndex: number, ruleIndex: number) => {
    return `${categoryIndex + 1}.${ruleIndex + 1}`;
  };

  return (
    <section className="container w-fit space-y-4">
      <h1 className="text-5xl font-black">Rules</h1>

      {ruleCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-2">
          <h2 className="text-2xl font-bold">
            {categoryIndex + 1}. {category.title}
          </h2>
          <ol className="list-none space-y-1">
            {category.rules.map((rule, ruleIndex) => (
              <li
                key={ruleIndex}
                className="relative pl-8"
                style={{
                  counterIncrement: "item",
                  counterReset: ruleIndex === 0 ? "item" : "none",
                }}
              >
                <span
                  className="absolute left-0"
                  style={{
                    content: `"${getMarkerContent(categoryIndex, ruleIndex)}"`,
                  }}
                >
                  {getMarkerContent(categoryIndex, ruleIndex)}
                </span>
                {rule}
              </li>
            ))}
          </ol>
        </div>
      ))}

      <div className="alert alert-warning shadow">
        <Book />
        <span>Remember: WorldMC staff has the final say in rule interpretation and enforcement. Play responsibly and have fun!</span>
      </div>
    </section>
  );
}
