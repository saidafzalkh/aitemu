"use client";

import { MutableRefObject, ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";

import {
    FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { CollectionType } from "@/validators/new-collection-validator";

import type EditorJS from "@editorjs/editorjs";
interface Props {
  form: UseFormReturn<CollectionType>;
  editorRef: MutableRefObject<EditorJS | undefined>;
}

const InputDescription = ({ form, editorRef }: Props): ReactElement => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const initializeEditor = useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Embed = (await import("@editorjs/embed")).default;
    const Table = (await import("@editorjs/table")).default;
    const List = (await import("@editorjs/list")).default;
    const Code = (await import("@editorjs/code")).default;
    const LinkTool = (await import("@editorjs/link")).default;
    const InlineCode = (await import("@editorjs/inline-code")).default;

    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: "editor",
        onReady() {
          editorRef.current = editor;
        },
        placeholder: "Type here to describe your collection...",
        inlineToolbar: true,
        data: { blocks: [] },
        tools: {
          header: Header,
          linkTool: {
            class: LinkTool,
            config: {
              endpoint: "/api/link",
            },
          },
          list: List,
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          embed: Embed,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (Object.keys(form.formState).length) {
      for (const [_key, value] of Object.entries(form.formState)) {
        value;
        toast({
          title: "Something went wrong.",
          description: "Error: " + (value as { message: string }).message,
          variant: "destructive",
        });
      }
    }
  }, [form.formState]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await initializeEditor();
    };

    if (isMounted) {
      init();

      return () => {
        editorRef.current?.destroy();
        editorRef.current = undefined;
      };
    }
  }, [isMounted, initializeEditor]);

  return (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl className="prose prose-stone dark:prose-invert">
            <div
              id="editor"
              className="border p-2 rounded-sm text-sm max-w-full"
            />
            {/* <Textarea placeholder="Enter the description" {...field} /> */}
          </FormControl>
          <FormDescription>Describe your collection</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputDescription;
