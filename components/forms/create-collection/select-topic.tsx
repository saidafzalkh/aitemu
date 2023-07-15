"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Command, CommandEmpty, CommandGroup, CommandInput, CommandItem
} from "@/components/ui/command";
import {
    FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { TOPICS } from "@/config";
import { formatString } from "@/helpers/format-string";
import { cn } from "@/lib/shadcn";
import { CollectionType } from "@/validators/new-collection-validator";

import { ScrollArea } from "../../ui/scroll-area";

type Props = {
  form: UseFormReturn<CollectionType>;
};

type topicType = { label: string; value: string };

export function SelectTopic({ form }: Props) {
  // TODO: Make it dynamic
  const locale = "en";

  const topics: topicType[] = TOPICS[locale].map((e) => ({
    label: e,
    value: formatString(e),
  }));

  return (
    <FormField
      control={form.control}
      name="topic"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Topic</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-[200px] justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? topics.find((topic) => topic.value === field.value)?.label
                    : "Select Topic"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search topic..." />
                <CommandEmpty>No topic found.</CommandEmpty>
                <ScrollArea className="h-72">
                  <CommandGroup>
                    {topics.map((topic) => (
                      <CommandItem
                        value={topic.value}
                        key={topic.value}
                        onSelect={(value) => {
                          form.setValue("topic", value);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            topic.value === field.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {topic.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </ScrollArea>
              </Command>
            </PopoverContent>
          </Popover>
          <FormDescription>Choose a topic for your collection</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
