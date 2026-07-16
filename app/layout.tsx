import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pristine Care | Premium B2B Laundry & Linen Management",
  description: "Delivering premium laundry, dry cleaning, linen management and hygiene solutions with uncompromising quality, precision and reliability.",
  alternates: {
    canonical: "https://pristinecare.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness and Service Schema markup
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://pristinecare.in/#organization",
        "name": "Pristine Care",
        "image": "https://pristinecare.in/hero_linen.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "F - ll Block, Plot No. 74/74A/1, Block F-2, MIDC, Pimpri Colony",
          "addressLocality": "Pimpri-Chinchwad",
          "addressRegion": "Maharashtra",
          "postalCode": "411018",
          "addressCountry": "IN"
        },
        "telephone": "+91 124 456 7890",
        "email": "info@pristinecare.in",
        "url": "https://pristinecare.in"
      },
      {
        "@type": "Service",
        "serviceType": "Premium B2B Laundry and Linen Management",
        "provider": {
          "@id": "https://pristinecare.in/#organization"
        },
        "areaServed": "IN",
        "audience": {
          "@type": "BusinessAudience",
          "audienceType": "Hotels, Hospitals, Corporates"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="GSC_VERIFICATION_PLACEHOLDER" />
        
        {/* Google Analytics Placeholder — replace with real G- ID before going live */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GA_PLACEHOLDER"></script>
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GA_PLACEHOLDER');
            `
          }}
        />
        
        {/* LocalBusiness and Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

