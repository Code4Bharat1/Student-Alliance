import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutClientWrapper from "@/components/LayoutClientWrapper";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"), // <-- Add this line
  title: "Student Alliance | STEM & Robotics Lab Solutions India",
  description:
    "Student Alliance LLP is India’s leading provider of innovative STEM and robotics lab solutions for schools, corporates, and government. Discover our mission, vision, and FAQs.",
  keywords:
    "Student Alliance, STEM labs, Robotics labs, Educational solutions, India, School labs, Technology, Consulting, IT integration",
  openGraph: {
    title: "Student Alliance | STEM & Robotics Lab Solutions India",
    description:
      "India’s pioneer in STEM & robotics lab solutions. Learn about our mission, vision, values, and frequently asked questions.",
    type: "website",
    url: "https://yourdomain.com",
    images: [
      {
        url: "/images/about-bg.png",
        width: 1200,
        height: 630,
        alt: "Student Alliance STEM Robotics Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Alliance | STEM & Robotics Lab Solutions India",
    description:
      "India’s pioneer in STEM & robotics lab solutions. Learn about our mission, vision, values, and frequently asked questions.",
    images: ["/images/about-bg.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L48FSWY2HB"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L48FSWY2HB');
          `}
        </Script>
        {/* No second <head> here! */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  );
}
