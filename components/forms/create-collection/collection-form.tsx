"use client";

import { User } from "next-auth";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import {
    CollectionFormSchema, CollectionType, FieldsAsType
} from "@/validators/new-collection-validator";
import { zodResolver } from "@hookform/resolvers/zod";

import CustomFields from "./custom-fields";
import InputDescription from "./input-description";
import InputName from "./input-name";
import { SelectTopic } from "./select-topic";

import type EditorJS from "@editorjs/editorjs";

const CollectionForm = ({ user }: { user: User }) => {
  const [customFields, setCustomFields] = useState<FieldsAsType>([]);
  const editorRef = useRef<EditorJS>();

  const form = useForm<CollectionType>({
    resolver: zodResolver(CollectionFormSchema),
    defaultValues: {
      userId: user.id,
      description: null,
      name: "",
      topic: "",
      fields: customFields,
    },
  });

  const { toast } = useToast();
  const route = useRouter();

  async function onSubmit(values: CollectionType) {
    const payload: CollectionType = {
      ...values,
      description: await editorRef.current?.save(),
    };

    console.log(payload);

    toast({
      title: "Hey! Sorry!",
      description: `But for now you cant create a collection...`,
    });
  }

  return (
    <div className="my-5 lg:w-3/6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <InputName form={form} />
          <InputDescription editorRef={editorRef} form={form} />
          <SelectTopic form={form} />
          <CustomFields
            form={form}
            customFields={customFields}
            setCustomFields={setCustomFields}
          />

          <div className="flex gap-2">
            <Button variant="outline" onClick={() => route.back()}>
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CollectionForm;
