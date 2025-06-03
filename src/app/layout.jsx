import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutClientWrapper from "@/components/LayoutClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
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
        <meta
          name="keywords"
          content="Student Alliance, STEM labs, Robotics labs, Educational solutions, India, School labs, Technology, Consulting, IT integration"
        />
        <meta
          property="og:title"
          content="Student Alliance | STEM & Robotics Lab Solutions India"
        />
        <meta
          property="og:description"
          content="India’s pioneer in STEM & robotics lab solutions. Learn about our mission, vision, values, and frequently asked questions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/about-bg.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Student Alliance | STEM & Robotics Lab Solutions India"
        />
        <meta
          name="twitter:description"
          content="India’s pioneer in STEM & robotics lab solutions. Learn about our mission, vision, values, and frequently asked questions."
        />
        <meta name="twitter:image" content="/images/about-bg.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  );
}
