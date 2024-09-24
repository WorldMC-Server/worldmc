import { getTown } from "@/lib/bridge";
import { formatDateTime } from "@/lib/format";
import clsx from "clsx";
import Link from "next/link";
import { Medal, Users } from "lucide-react";
import DiscordLogo from "@/components/DiscordLogo";
import MinecraftBanner from "@/components/minecraft/MinecraftBanner";
import ResidentButton from "@/components/towny/ResidentButton";
import NationButton from "@/components/towny/NationButton";
import { MinecraftItemType } from "@/lib/minecraft/MinecraftEnums";
import MinecraftIcon from "@/components/minecraft/MinecraftIcon";

export const revalidate = 60;

const replaceUnderscoresWithSpaces = (input: string): string => input.replace(/_/g, " ");

export async function generateMetadata({ params }: { params: { uuid: string } }) {
  const town = await getTown(params.uuid);
  town.name = replaceUnderscoresWithSpaces(town.name);

  const rPlural = town.residents.length > 1 ? "residents" : "resident";

  return {
    title: town.name,
    description:
      town.name + " is a town on WorldMC owned by " + town.mayor.name + " with " + town.residents.length + ` ${rPlural}.\n` + town.board,
  };
}

export default async function Page({ params }: { params: { uuid: string } }) {
  const town = await getTown(params.uuid);

  const bannerType = town.bannerMeta?.type || "WHITE_BANNER";
  const bannerPatterns = town.bannerMeta?.patterns || null;

  return (
    <section className="space-y-4">
      <div className="flex gap-4 rounded-box bg-base-200 p-4 shadow">
        <figure className="drop-shadow">
          <MinecraftBanner type={bannerType} patterns={bannerPatterns} className="banner" />
        </figure>
        <div className="flex w-full flex-col justify-between gap-2">
          <div className="flex-1">
            <h1 className="text-xl font-black">{replaceUnderscoresWithSpaces(town.name)}</h1>
            <p>
              By{" "}
              <Link href={`/residents/${town.mayor.UUID}`} className="link-hover link-secondary">
                {town.mayor.name}
              </Link>
            </p>
            <i>Founded {formatDateTime(town.registered)}</i>
          </div>

          <div className="flex flex-wrap gap-2">
            {town.discordLink && (
              <div className="badge badge-lg">
                <DiscordLogo className="mr-1 size-4" />
                <Link href={town.discordLink} className="link-hover link-primary">
                  Discord
                </Link>
              </div>
            )}
            <div className="badge badge-lg">
              <MinecraftIcon assetType={MinecraftItemType.GOLD_INGOT} className="mr-1 size-4" /> {town.bankAccount.toLocaleString()}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="badge badge-info badge-lg">
              <Medal className="mr-1 size-4" /> Lvl {town.level}
            </div>
            <div className="badge badge-info badge-lg">
              <Users className="mr-1 size-4" /> {town.residents.length}
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-bold">Settings</h2>
      <div className="flex flex-wrap gap-2">
        <div className={clsx("badge badge-lg", town.settings.pvp ? "badge-success" : "badge-error")}>pvp</div>
        <div className={clsx("badge badge-lg", town.settings.fire ? "badge-success" : "badge-error")}>fire spread</div>
        <div className={clsx("badge badge-lg", town.settings.mobs ? "badge-success" : "badge-error")}>hostile mobs</div>
        <div className={clsx("badge badge-lg", town.settings.explosions ? "badge-success" : "badge-error")}>explosions</div>
      </div>
      <h2 className="text-xl font-bold">Board</h2>
      <p>{town.board}</p>
      <h2 className="text-xl font-bold">Nation</h2>
      {town.nation ? <NationButton item={town.nation} /> : <p>This town has no nation.</p>}
      <h2 className="text-xl font-bold">Residents ({town.residents.length})</h2>
      {town.residents.length == 0 ? (
        <p>This town has no residents.</p>
      ) : (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          <ResidentButton item={town.mayor} key={town.mayor.UUID} showMayor={true} />
          {town.residents
            .filter((resident) => resident.UUID !== town.mayor.UUID)
            .map((resident) => (
              <ResidentButton item={resident} key={resident.UUID} />
            ))}
        </div>
      )}
    </section>
  );
}
