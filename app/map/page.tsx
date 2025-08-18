import { ExternalLink, Map } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Map",
};

export default function Page() {
  return (
    <div className="container space-y-4">
      <h1 className="text-center text-5xl font-black">Earth Map</h1>
      <div>
        <iframe src="http://play.worldmc.net:8123/" className="aspect-[3/4] w-full rounded-box shadow sm:aspect-video" />
        <div className="flex flex-col justify-between text-left sm:flex-row">
          <div>
            <Link href="http://play.worldmc.net:8123/" className="link-hover link-primary" target="_blank">
              View Full Map <ExternalLink className="inline-block size-4" />
            </Link>
            <p>Earth 1:1000</p>
          </div>
          <p>
            Powered by SquareMap <Map className="inline-block size-4" />
          </p>
        </div>
      </div>
    </div>
  );
}
