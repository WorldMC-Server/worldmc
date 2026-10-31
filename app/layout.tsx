import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import ClosureNotice from "@/components/ClosureNotice";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://worldmc.net"),
  title: {
    default: "WorldMC",
    template: "%s - WorldMC",
  },
  description:
    "WorldMC is no longer live. Explore the website archive. For enquiries, contact contact@promptsolutions.com.au.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen">
            <ClosureNotice />
            <Navbar />
            <div className="py-4">{children}</div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
