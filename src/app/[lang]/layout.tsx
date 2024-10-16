import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ParticlesContainer from "@/components/ParticlesContainer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  return {
    title: {
      template: "%s | My Website",
      default: "My Website",
    },
    description:
      params.lang === "ro"
        ? "Un site web multilingv"
        : "A multilingual website",
    alternates: {
      languages: {
        en: "/en",
        ro: "/ro",
      },
    },
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className={`antialiased`}>
        <NavBar />

        {children}
      </body>
    </html>
  );
}
