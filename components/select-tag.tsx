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
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/shadcn";

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  label?: string;
  description?: string;
  form: UseFormReturn<
    {
      name: string;
      description: string;
      topic: string;
    },
    any,
    undefined
  >;
}

export function SelectTag({ options, form }: Props) {
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
                    ? options.find((option) => option.value === field.value)
                        ?.label
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
                    {options.map((option) => (
                      <CommandItem
                        value={option.value}
                        key={option.value}
                        onSelect={(value) => {
                          form.setValue("topic", value);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            option.value === field.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {option.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </ScrollArea>
              </Command>
            </PopoverContent>
          </Popover>
          <FormDescription>
            This is the topic of your collection.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
