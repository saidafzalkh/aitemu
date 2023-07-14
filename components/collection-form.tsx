"use client";

import { ReactElement } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TOPICS } from "@/config";
import { formatString } from "@/helpers/format-string";
import { CollectionFormValidator, CollectionType } from "@/validators/new-collection-validator";
import { zodResolver } from "@hookform/resolvers/zod";

import { SelectTag } from "./select-tag";
import { Textarea } from "./ui/textarea";

const topics: {
  label: string;
  value: string;
}[] = TOPICS.en.map((e) => ({ value: formatString(e), label: e }));

const CollectionForm = async (): Promise<ReactElement> => {
  const form = useForm<CollectionType>({
    resolver: zodResolver(CollectionFormValidator),
    defaultValues: {
      name: "",
      description: "",
      topic: "others",
    },
  });

  function onSubmit(values: CollectionType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormDescription>The name of your collection</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="you can use markdown" {...field} />
              </FormControl>
              <FormDescription>
                Describe your collection you can use Markdown
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <SelectTag form={form} options={topics} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CollectionForm;
