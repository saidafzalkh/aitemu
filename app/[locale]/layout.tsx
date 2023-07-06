import "@/styles/globals.css";

import { useLocale } from "next-intl";
import { getTranslator } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import Header from "@/components/header";

import { ThemeProvider } from "./providers";

interface layoutProps {
  children?: ReactNode;
  params?: { locale: string };
}

interface MetadataProps {
  params: { locale: string };
}

export async function generateMetadata({ params }: MetadataProps) {
  const t = await getTranslator(params.locale, "Metadata");

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: t("author") }],
  };
}

export default function LocaleLayout({ children, params }: layoutProps) {
  const locale = useLocale();

  if (params?.locale !== locale) notFound();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="min-h-screen">
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
