import { useTranslations } from "next-intl";

import About from "@/components/about";
import Hero from "@/components/hero";
import Footer from "@/components/layout/footer";

export default function Page() {
  const t = useTranslations("Index.hero");

  return (
    <>
      <section className="container min-h-screen ">
        <Hero />
        <About />
      </section>
      <Footer />
    </>
  );
}
