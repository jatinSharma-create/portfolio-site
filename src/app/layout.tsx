import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
// import { Analytics } from "@vercel/analytics/react"; // enable after deploying if you want

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Jatin Kumar Sharma — Portfolio",
  description: "UNSW CS student — security, networking, TypeScript backend.",
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "Jatin Kumar Sharma — Portfolio",
    description: "UNSW CS student — security, networking, TypeScript backend.",
    url: SITE.url,
    siteName: SITE.name,
    images: [SITE.ogImage], // /og.png in public/
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jatin Kumar Sharma — Portfolio",
    description: "UNSW CS student — security, networking, TypeScript backend.",
    images: [SITE.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100`}>
        <Container>
          <Header />
          <main>{children}</main>
          <Footer />
        </Container>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
