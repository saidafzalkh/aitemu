import { useTranslations } from "next-intl";

import About from "@/components/layout/about";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Hero from "@/components/layout/hero";

export default function Page() {
  const t = useTranslations("Index.hero");

  return (
    <>
      <section className="container min-h-screen ">
        <Header />
        <Hero />
        <About />
      </section>
      <Footer />
    </>
  );
}
