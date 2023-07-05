import { useTranslations } from "next-intl";

import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Page() {
  const t = useTranslations("Index.hero");

  return (
    <>
      <section className="container min-h-screen">
        <Hero />
      </section>
      <Footer />
    </>
  );
}
