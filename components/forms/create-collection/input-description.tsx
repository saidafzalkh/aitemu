"use client";

import { ReactElement } from "react";
import { UseFormReturn } from "react-hook-form";

import {
    Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

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
}

const InputDescription = ({ form }: Props): ReactElement => {
  return (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Textarea placeholder="Enter the description" {...field} />
          </FormControl>
          <FormDescription>Describe your collection</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputDescription;
