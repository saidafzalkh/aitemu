import { useTranslations } from "next-intl";

import About from "@/components/layout/about";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Hero from "@/components/layout/hero";
import TopCollections from "@/components/layout/top-collections";

export default function Page() {
  const t = useTranslations("Index.hero");

  return (
    <>
      <Header className="z-10" />
      <section className="container min-h-screen ">
        <Hero />
        <TopCollections />
        <About />
      </section>
      <Footer />
    </>
  );
}
