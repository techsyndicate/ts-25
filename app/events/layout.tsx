import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Syndicate",
  description:
    "Tech Syndicate is the technology club of Amity International School, Sector-46, Gurgaon. Revolutionize!",
};

export default function EventLayout({
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
        className={`${outfitFont.variable} ${outfitFont.className} antialiased m-0 overflow-scroll bg-[#000000] text-white`}
        style={{
          overflowY: "scroll",
        }}
      >
        {children}
      </body>
    </html>
  );
}
