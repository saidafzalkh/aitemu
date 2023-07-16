"use client";

import { ReactElement } from "react";
import { UseFormReturn } from "react-hook-form";

import {
    FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CollectionType } from "@/validators/new-collection-validator";

interface Props {
  form: UseFormReturn<CollectionType>;
}

const InputName = ({ form }: Props): ReactElement => {
  return (
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input placeholder="Enter the name" {...field} />
          </FormControl>
          <FormDescription>Name your collection</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputName;
