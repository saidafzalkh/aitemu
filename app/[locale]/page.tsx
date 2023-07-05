import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { useTranslations } from "next-intl";

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
