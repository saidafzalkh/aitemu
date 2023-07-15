"use client";

import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

import { Input } from "./ui/input";

const fields = [
  { value: "number", label: "Number" },
  { value: "string", label: "String" },
  { value: "text", label: "Text" },
  { value: "boolean", label: "Checkbox" },
  { value: "date", label: "Date" },
];

interface Props {
  disabled?: boolean;
  value?: "number" | "string" | "text" | "boolean" | "date";
  name?: string;
}

export const ItemField = (props: Props) => {
  const onSelect = () => {};

  return (
    <div className="flex gap-2 w-full">
      <Input
        disabled={props.disabled}
        value={props.name}
        placeholder="Field Name"
      />
      <Select disabled={props.disabled} defaultValue={props.value}>
        <SelectTrigger>
          <SelectValue placeholder="Field Type" />
        </SelectTrigger>
        <SelectContent>
          {fields.map((field) => (
            <SelectItem
              key={field.value}
              value={field.value}
              className="flex gap-2"
            >
              <span>{field.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
