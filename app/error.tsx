"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="text-center">
      <h1 className="font-semibold">An unknown error occured</h1>
      <p>If the error persists after refreshing, please contact an administrator.</p>
      <p>Code: {error.digest}</p>
    </section>
  );
}
