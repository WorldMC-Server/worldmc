import Link from "next/link";

export default function ServerClosed() {
  return (
    <section className="container max-w-3xl space-y-6 py-12 text-center">
      <h1 className="text-4xl font-black">WorldMC is no longer live</h1>
      <p>The Minecraft server is closed. Live maps, player records, markets, and voting are no longer available.</p>
      <a href="mailto:contact@promptsolutions.com.au" className="link break-words">contact@promptsolutions.com.au</a>
      <p><Link href="/" className="btn btn-primary">Back to WorldMC</Link></p>
    </section>
  );
}
