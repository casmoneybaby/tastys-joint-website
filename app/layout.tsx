import type { Metadata } from "next";
import { Bebas_Neue, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
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
  title: "Tasty's Joint | Premium Burgers in Sausalito, CA",
  description:
    "Bold, crave-worthy premium burgers in the heart of Sausalito, California — Marin County's best burger spot. Fresh ingredients, unforgettable flavors. Dine-in, takeout & delivery. Open daily.",
  keywords:
    "premium burger restaurant Sausalito, Tasty's Joint, best burgers Sausalito, Marin County burgers, Caledonia Street Sausalito, smash burger California",
  openGraph: {
    title: "Tasty's Joint | Premium Burgers in Sausalito, CA",
    description:
      "Bold, crave-worthy premium burgers in the heart of Sausalito, California. The future of burgers.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=90&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Tasty's Joint — Premium Burgers Sausalito CA",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Tasty's Joint",
  description:
    "Premium burgers in Sausalito, CA. Bold flavor, fresh ingredients, unforgettable experience.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "43 Caledonia St",
    addressLocality: "Sausalito",
    addressRegion: "CA",
    postalCode: "94965",
    addressCountry: "US",
  },
  telephone: "(415) 729-9328",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "11:00",
      closes: "20:00",
    },
  ],
  servesCuisine: ["Burgers", "American"],
  priceRange: "$$",
  url: "https://tastysjoint.com",
  hasMap: "https://maps.google.com/?q=43+Caledonia+St+Sausalito+CA+94965",
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
        className={`${bebasNeue.variable} ${inter.variable} ${playfair.variable} antialiased`}
        style={{ backgroundColor: "var(--black)", color: "var(--white)" }}
      >
        <Navbar />
        <main>{children}</main>

        {/* Site Footer */}
        <footer className="site-footer">
          <span className="footer-logo">Tasty&apos;s Joint</span>
          <p className="footer-copy">
            © 2025 Tasty&apos;s Joint · 43 Caledonia St, Sausalito CA 94965
          </p>
          <p className="footer-copy">
            Website design preview
          </p>
        </footer>
      </body>
    </html>
  );
}
