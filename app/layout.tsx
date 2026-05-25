import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.janospoor.com"),
  title: "János Poór",
  description:
    "Data management and analytics leader with 20+ years in banking and insurance. Head of Data Management at Alfa Biztosító.",
  openGraph: {
    title: "János Poór",
    description:
      "Data management and analytics leader with 20+ years in banking and insurance.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "János Poór",
    description:
      "Data management and analytics leader with 20+ years in banking and insurance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
