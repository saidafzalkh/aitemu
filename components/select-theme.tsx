"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";

import { ReactElement } from "react";

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
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectTheme;
