import { useLocale } from "next-intl";
import { HTMLAttributes, ReactElement } from "react";

import { cn } from "@/lib/shadcn";

import SelectLang from "./select-lang";
import SelectTheme from "./select-theme";
import Small from "./typography/small";

interface divProps extends HTMLAttributes<HTMLDivElement> {}

const Settings = (props: divProps): ReactElement => {
  const locale = useLocale();

  return (
    <div className={cn("flex flex-col gap-4", props.className)}>
      <Small>Language</Small>
      <SelectLang locale={locale as "en" | "ru"} />
      <Small>Theme</Small>
      <SelectTheme />
    </div>
  );
};

export default Settings;
