import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Syndicate",
  description: "Tech Syndicate is the technology club of Amity International School, Sector-46, Gurgaon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitFont.variable} ${outfitFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
