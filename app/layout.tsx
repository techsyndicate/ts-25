import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Syndicate | Home",
  description:
    "Tech Syndicate is the technology club of Amity International School, Sector-46, Gurgaon. Revolutionize!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tsLogo.png" type="image/png" sizes="any"></link>
      </head>
      <body
        className={`${outfitFont.variable} ${outfitFont.className} bg-[#000] antialiased m-0 overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
