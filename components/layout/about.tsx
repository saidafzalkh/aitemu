import { useTranslations } from "next-intl";
import Link from "next/link";
import { ReactElement } from "react";

import H2 from "../typography/h2";
import Large from "../typography/large";
import { Button } from "../ui/button";

const About = (): ReactElement => {
  const t = useTranslations("Index.about");

  return (
    <article className="flex flex-col gap-2 sm:w-5/6 w-full my-40">
      <H2>{t("title")}</H2>
      <Large>{t("items.one")}</Large>
      <Large>{t("items.two")}</Large>
      <Large>{t("items.three")}</Large>
      <Large>{t("items.four")}</Large>
      <Large>{t("items.five")}</Large>
      <div className="mt-4">
        <Button asChild>
          <Link href="/sign-up">{t("join")}</Link>
        </Button>
      </div>
    </article>
  );
};

export default About;
