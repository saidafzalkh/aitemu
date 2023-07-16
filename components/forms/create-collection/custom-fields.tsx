"use client";

import { Minus, Plus } from "lucide-react";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { FieldsAsType } from "@/validators/new-collection-validator";

import FixedFields from "./fixed-fields";

interface Props {
  form: UseFormReturn<
    {
      name: string;
      description: string;
      topic: string;
      fields: {
        name: string;
        type: string;
      }[];
    },
    any,
    undefined
  >;
  customFields: FieldsAsType;
  setCustomFields: Dispatch<SetStateAction<FieldsAsType>>;
}

const selectOptions = [
  { value: "number", label: "Number" },
  { value: "string", label: "String" },
  { value: "text", label: "Text" },
  { value: "boolean", label: "Checkbox" },
  { value: "date", label: "Date" },
];

const CustomFields = ({
  form,
  customFields,
  setCustomFields,
}: Props): ReactElement => {
  const addCustomField = () => {
    setCustomFields((current) => [...current, { name: "", type: "number" }]);
  };

  const deleteCustomField = (index: number) => {
    setCustomFields((current) => {
      return current.filter((_, i) => i !== index);
    });
  };

  return (
    <div className="grid gap-2">
      <div>
        <p className="font-semibold text-sm">Fields</p>
        <p className="text-sm text-muted-foreground">
          Set up custom fields for your items
        </p>
      </div>
      <FixedFields />
      {customFields.map((_, i) => (
        <div key={i} className="grid grid-cols-[3fr_3fr_1fr] gap-2">
          <FormField
            control={form.control}
            name={`fields.${i}.name`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Field name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={`fields.${i}.type`}
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Field type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {selectOptions.map((field) => (
                      <SelectItem key={field.value} value={field.value}>
                        <span>{field.label}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            onClick={() => deleteCustomField(i)}
            variant="outline"
            type="button"
          >
            <Minus className="w-4 h-4 fill-secondary" />
          </Button>
        </div>
      ))}
      <Button
        onClick={() => addCustomField()}
        variant="secondary"
        type="button"
      >
        <Plus className="w-4 h-4 fill-secondary" />
      </Button>
    </div>
  );
};

export default CustomFields;
