import { useTranslations } from "next-intl";
import Link from "next/link";
import { ReactElement } from "react";

import H1 from "../typography/h1";
import Lead from "../typography/lead";
import { Button } from "../ui/button";

const Hero = (): ReactElement => {
  const t = useTranslations("Index.hero");

  return (
    <div className="flex flex-col gap-2 sm:w-4/6 w-full mt-40">
      <H1>{t("title")}</H1>
      <Lead>{t("description")}</Lead>
      <Lead>{t("call-to-action")}</Lead>
      <div className="flex gap-4 mt-4">
        <Button asChild>
          <Link href="/sign-up">{t("get-started")}</Link>
        </Button>
        <Button variant="outline">
          <Link href="#">GitHub</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
