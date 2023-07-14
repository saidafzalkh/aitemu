import { useTranslations } from "next-intl";

import About from "@/components/layout/about";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Hero from "@/components/layout/hero";

export default function Page() {
  const t = useTranslations("Index.hero");

  return (
    <>
      <Header />
      <section className="container min-h-screen ">
        <Hero />
        <About />
      </section>
      <Footer />
    </>
  );
}
