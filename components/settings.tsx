import { cn } from "@/lib/shadcn";
import { HTMLAttributes, ReactElement } from "react";
import Small from "./typography/small";
import SelectLang from "./select-lang";
import SelectTheme from "./select-theme";

interface divProps extends HTMLAttributes<HTMLDivElement> {}

const Settings = (props: divProps): ReactElement => {
  return (
    <div className={cn("flex flex-col gap-4", props.className)}>
      <Small>Language</Small>
      <SelectLang />
      <Small>Theme</Small>
      <SelectTheme />
    </div>
  );
};

export default Settings;
