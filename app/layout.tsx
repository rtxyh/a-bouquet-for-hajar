import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Little Universe for Hajar",
  description: "A small interactive universe, made with care for Hajar.",
  openGraph: {
    type: "website",
    title: "A Little Universe for Hajar",
    description: "A small interactive universe, made with care for Hajar.",
    images: [{ url: "/Quiet Love Bouquet.png", alt: "A bouquet made for Hajar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Little Universe for Hajar",
    description: "A small interactive universe, made with care for Hajar.",
    images: ["/Quiet Love Bouquet.png"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
