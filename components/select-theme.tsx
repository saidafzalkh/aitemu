"use client";

import { useTheme } from "next-themes";
import { ReactElement } from "react";

import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

const SelectTheme = (): ReactElement => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (e: string) => {
    setTheme(e);
  };

  return (
    <Select defaultValue={theme || "system"} onValueChange={handleThemeChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem disabled={theme === "light"} value="light">
          Light
        </SelectItem>
        <SelectItem disabled={theme === "dark"} value="dark">
          Dark
        </SelectItem>
        <SelectItem disabled={theme === "system"} value="system">
          System
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectTheme;
