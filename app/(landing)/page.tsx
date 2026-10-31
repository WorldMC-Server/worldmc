import Image from "next/image";

export default function Home() {
  return (
    <section className="container space-y-4">
      <div className="hero rounded-box bg-base-200 py-8 shadow" style={{ backgroundImage: "url(/londondark.png)" }}>
        <div className="hero-content text-center">
          <div className="max-w-md bg-transparent text-white dark:text-base-content">
            <h1 className="text-6xl font-black">WorldMC</h1>
            <h2 className="text-4xl font-bold">Minecraft Earth</h2>
            <p className="py-6">
              A Minecraft community on a 1:1000 Earth map. WorldMC is no longer live. This website remains as an archive.
            </p>
            <a href="mailto:contact@promptsolutions.com.au" className="btn btn-primary">Contact us</a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg">
        <div className="hero">
          <div className="hero-content flex-col md:flex-row">
            <Image src="/old-towns/bank.jpg" alt="Minecraft Bank" width={300} height={300} className="max-w-sm rounded-box shadow" />
            <div className="space-y-4 py-4 text-center md:text-left">
              <h1 className="text-5xl font-bold">Jam Packed</h1>
              <p>WorldMC brought players together to build towns and cities on a Minecraft Earth map. These images show some of the places they created.</p>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="hero-content flex-col md:flex-row-reverse">
            <Image
              src="/old-towns/skyscrapers.jpg"
              alt="Minecraft Skyscrapers"
              width={300}
              height={300}
              className="max-w-sm rounded-lg shadow"
            />
            <div className="space-y-4 py-4 text-center md:text-left">
              <h1 className="text-5xl font-bold">Power, Authority, Influence</h1>
              <p>Players formed towns and nations, built alliances, and shaped their own communities with Towny.</p>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="hero-content flex-col md:flex-row">
            <Image src="/old-towns/rome.jpg" alt="Minecraft Rome" width={300} height={300} className="max-w-sm rounded-lg shadow" />
            <div className="space-y-4 py-4 text-center md:text-left">
              <h1 className="text-5xl font-bold">It&apos;s Your Destiny</h1>
              <p>A player-run gold economy connected shops, trades, and building projects across the server.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
