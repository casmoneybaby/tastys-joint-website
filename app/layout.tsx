import type { Metadata } from "next";
import { Bebas_Neue, Anton, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tasty's Joint | Burgers in Sausalito, CA",
  description:
    "Bold, crave-worthy burgers in the heart of Sausalito, California. Fresh ingredients, great flavors, local vibes. Open 11AM–9PM daily.",
  keywords:
    "burger restaurant Sausalito, Tasty's Joint, Sausalito burgers, best burgers Marin County",
  openGraph: {
    title: "Tasty's Joint | Burgers in Sausalito, CA",
    description:
      "Bold, crave-worthy burgers in the heart of Sausalito, California. Fresh ingredients, great flavors, local vibes.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Tasty's Joint",
  address: {
    "@type": "PostalAddress",
    streetAddress: "43 Caledonia St",
    addressLocality: "Sausalito",
    addressRegion: "CA",
    postalCode: "94965",
  },
  telephone: "(415) 729-9328",
  openingHours: "Mo-Su 11:00-21:00",
  servesCuisine: "Burgers, American",
  priceRange: "$$",
  url: "https://tastysjoint.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${bebasNeue.variable} ${anton.variable} ${inter.variable} ${playfair.variable} antialiased bg-grill-black text-cream-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
