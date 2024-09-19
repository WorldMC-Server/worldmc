import { Info } from "lucide-react";
import CopyIpText from "@/app/docs/components/CopyIpText";
import Image from "next/image";

export default function Page() {
  return (
    <section className="container w-fit space-y-4">
      <h1 className="text-5xl font-black">Joining WorldMC</h1>
      <Image
        src="/worldmap.png"
        alt="WorldMC Earth Map"
        className="max-w-4xl rounded-box shadow"
        width={1920}
        height={1080}
        layout="responsive"
      />
      <ol className="list-inside list-decimal">
        <li>Open Minecraft and go to Multiplayer</li>
        <li>Click &quot;Add Server&quot; or &quot;Direct Connect&quot;</li>
        <li>
          Enter the server address: <CopyIpText text="play.worldmc.net" />
        </li>
        <li>Click &quot;Join Server&quot; and start playing!</li>
      </ol>

      <div className="alert alert-info shadow">
        <Info />
        <span>Make sure you&apos;re using the latest version of Minecraft for the best experience!</span>
      </div>
    </section>
  );
}
