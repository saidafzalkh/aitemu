"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ReactElement } from "react";

const SelectLang = (): ReactElement => {
  return (
    <Select defaultValue="en">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ru">Russian</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectLang;
