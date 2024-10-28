import React from "react";
import {Book, Gavel, Info} from "lucide-react";
import { Metadata } from "next";
import {penalties, ruleCategories} from "@/app/docs/rules/rules";
import clsx from "clsx";

export const metadata: Metadata = {
    title: "Rules",
};

const getMarkerContent = (categoryIndex: number, ruleIndex: number) => {
    return `${categoryIndex + 1}.${ruleIndex + 1}`;
};

export default function RulesPage() {
    return (
        <section className="container w-fit space-y-4">
            <h1 className="text-5xl font-black">Rules</h1>

            <div className="alert alert-info shadow">
                <Info/>
                <span>
                    These rules apply to all WorldMC platforms, including the Minecraft server, Discord server, and any
                    other community channels we may own.
                </span>
            </div>

            {ruleCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-2">
                    <h2 className="text-3xl font-bold">
                        {categoryIndex + 1}. {category.title}
                    </h2>
                    <ol className="list-none space-y-1">
                        {category.rules.map((ruleObj, ruleIndex) => (
                            <li key={ruleIndex} className="relative pl-8">
                                <span className="absolute left-0 text-lg font-semibold">
                                    {getMarkerContent(categoryIndex, ruleIndex)}
                                </span>
                                <p className="text-lg font-semibold">{ruleObj.rule}</p>
                                {ruleObj.description && (
                                    <p>{ruleObj.description}</p>
                                )}
                                <div className="flex gap-2 mt-1">
                                    <div
                                        className={clsx("badge badge-warning", ruleObj.severity.includes(penalties.PERM_BAN) && "badge-error")}>
                                        <Gavel className="size-4 mr-1"/>
                                        {Array.isArray(ruleObj.severity)
                                            ? ruleObj.severity.join(", ")
                                            : ruleObj.severity}
                                    </div>
                                    {ruleObj.notes && <div className="badge">
                                        {ruleObj.notes}
                                    </div>}
                                </div>

                            </li>
                        ))}
                    </ol>
                </div>
            ))}

            <div className="alert alert-info shadow">
                <Book/>
                <span>
                    WorldMC staff has the final say in rule interpretation and enforcement. Play responsibly and have fun!
                </span>
            </div>
        </section>
    );
}
