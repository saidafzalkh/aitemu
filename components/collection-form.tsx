"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
    CollectionFormValidator, CollectionType, CustomFieldsType
} from "@/validators/new-collection-validator";
import { zodResolver } from "@hookform/resolvers/zod";

import ItemSettings from "./item-settings";
import { SelectTag } from "./select-tag";
import { Textarea } from "./ui/textarea";

const CollectionForm = () => {
  const [customField, setCustomField] = useState<CustomFieldsType>([]);

  const form = useForm<CollectionType>({
    resolver: zodResolver(CollectionFormValidator),
    defaultValues: {
      name: "",
      description: "",
      topic: "",
      custom_fields: customField,
    },
  });

  const { toast } = useToast();
  const route = useRouter();

  function onSubmit(values: CollectionType) {
    toast({
      title: "Hey!",
      description: `Your data is ${JSON.stringify(values)}`,
    });
  }

  return (
    <div className="my-5 lg:w-3/6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

          <SelectTag form={form} />

          <ItemSettings />

          <div className="flex gap-2">
            <Button variant="outline" onClick={() => route.back()}>
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CollectionForm;
