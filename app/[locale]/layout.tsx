import "@/styles/globals.css";

import { useLocale } from "next-intl";
import { getTranslator } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import Header from "@/components/layout/header";
import { Toaster } from "@/components/ui/toaster";

import Providers from "./providers";

interface layoutProps {
  children?: ReactNode;
  params?: { locale: string };
}

interface MetadataProps {
  params: { locale: string };
}

export async function generateMetadata({ params }: MetadataProps) {
  const t = await getTranslator(params.locale, "Metadata");
  const dev = process.env.NODE_ENV === "development";

  return {
    metadataBase: new URL(
      dev ? "http://localhost:3000" : "https://aitemu.vercel.app"
    ),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: t("author") }],
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      creator: "@kh_saddy",
    },
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      type: "website",
      locale: params.locale,
      url: "https://aitemu.vercel.app",
      title: t("title"),
      description: t("description"),
      siteName: "aitemu",
    },
  };
}

export default function LocaleLayout({ children, params }: layoutProps) {
  const locale = useLocale();

  if (params?.locale !== locale) notFound();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <main className="min-h-screen">
            <Header />
            {children}
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
