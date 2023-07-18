"use client";

import { MutableRefObject, ReactElement } from "react";
import { UseFormReturn } from "react-hook-form";

import Editor from "@/components/editor";
import {
    FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { CollectionType } from "@/validators/new-collection-validator";

import type EditorJS from "@editorjs/editorjs";
interface Props {
  form: UseFormReturn<CollectionType>;
  editorRef: MutableRefObject<EditorJS | undefined>;
}

const InputDescription = ({ form, editorRef }: Props): ReactElement => {
  return (
    <FormField
      control={form.control}
      name="description"
      render={() => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl className="prose prose-stone dark:prose-invert">
            <Editor editorRef={editorRef} />
          </FormControl>
          <FormDescription>Describe your collection</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputDescription;
