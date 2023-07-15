"use client";

import { Minus } from "lucide-react";
import { ReactElement } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { FIXED_FIELDS } from "@/config";

const selectOptions = [
  { value: "number", label: "Number" },
  { value: "string", label: "String" },
  { value: "text", label: "Text" },
  { value: "boolean", label: "Checkbox" },
  { value: "date", label: "Date" },
];

const FixedFields = (): ReactElement => {
  return (
    <>
      {FIXED_FIELDS.map((fields, i) => (
        <div key={i} className="grid grid-cols-[3fr_3fr_1fr] gap-2">
          <Input disabled value={fields.name} />
          <Select defaultValue={fields.type} disabled>
            <SelectTrigger>
              <SelectValue placeholder="Field type" />
            </SelectTrigger>
            <SelectContent>
              {selectOptions.map((field) => (
                <SelectItem key={field.value} value={field.value}>
                  <span>{field.label}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button disabled variant="outline" type="button">
            <Minus className="w-4 h-4 fill-secondary" />
          </Button>
        </div>
      ))}
    </>
  );
};

export default FixedFields;
