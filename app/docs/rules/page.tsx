import {penalties, ruleCategories} from "@/app/docs/rules/rules";
import {Gavel, Info} from "lucide-react";
import React from "react";
import clsx from "clsx";

export default function Page() {
    return (
        <section className="container max-w-screen-lg space-y-4">
            <h1 className="text-5xl font-black">Rules</h1>
            <div className="alert shadow">
                <Info className="stroke-info"/>
                <div>
                    <h3 className="font-bold">Info</h3>
                    <div className="text-sm">These rules apply to all WorldMC platforms, including the Minecraft server, Discord server, and any
                        other community channels we may own.</div>
                </div>
            </div>
            {ruleCategories.map((category, index) => <>
                <h2 className="text-3xl font-bold">{index + 1}. {category.title}</h2>
                <div className="space-y-4">
                    {category.rules.map((ruleObj, ruleIndex) => (
                        <div className="space-y-2" key={ruleIndex}>
                            <h3 className="text-xl font-semibold">{index + 1}.{ruleIndex + 1} {ruleObj.rule}</h3>
                            <p>{ruleObj.description}</p>
                            <div
                                className={clsx("badge badge-warning", ruleObj.severity.includes(penalties.PERM_BAN) && "badge-error")}>
                                <Gavel className="size-4 mr-1"/>
                                {ruleObj.severity.join(", ")}
                            </div>
                        </div>
                    ))}
                </div>
            </>)}
        </section>
    )
}