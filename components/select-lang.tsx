"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactElement, useTransition } from "react";

import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Value } from "@radix-ui/react-select";

interface Props {
  locale: "en" | "ru";
}

const SelectLang = ({ locale }: Props): ReactElement => {
  const path = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSelectLanguage = (value: string): void => {
    startTransition(() => {
      router.replace(`/${value}/${path}`);
    });
  };

  const isDisable = (value: string) => isPending || locale === value;

  return (
    <Select defaultValue={locale || "en"} onValueChange={handleSelectLanguage}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem disabled={isDisable("en")} value="en">
          English
        </SelectItem>
        <SelectItem disabled={isDisable("ru")} value="ru">
          Russian
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectLang;
