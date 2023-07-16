"use client";

import { Loader2 } from "lucide-react";
import { User } from "next-auth";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { uploadFiles } from "@/lib/uploadthing";
import {
    CollectionFormSchema, CollectionType, FieldsAsType
} from "@/validators/new-collection-validator";
import { zodResolver } from "@hookform/resolvers/zod";

import CustomFields from "./custom-fields";
import InputDescription from "./input-description";
import InputName from "./input-name";
import { SelectTopic } from "./select-topic";
import UploadImage from "./upload-image";

import type EditorJS from "@editorjs/editorjs";
const CollectionForm = ({ user }: { user: User }) => {
  const [customFields, setCustomFields] = useState<FieldsAsType>([]);
  const [image, setImage] = useState<File>();
  const [loading, setLoading] = useState<boolean>(false);
  const editorRef = useRef<EditorJS>();

  const form = useForm<CollectionType>({
    resolver: zodResolver(CollectionFormSchema),
    defaultValues: {
      userId: user.id,
      description: null,
      name: "",
      topic: "",
      fields: customFields,
      image: "",
    },
  });

  const { toast } = useToast();
  const route = useRouter();

  async function onSubmit(values: CollectionType) {
    setLoading(true);

    try {
      const [res] = await uploadFiles({
        files: [image as File],
        endpoint: "imageUploader",
      });

      const payload: CollectionType = {
        ...values,
        description: await editorRef.current?.save(),
        image: res.fileUrl,
      };

      console.log(payload);

      toast({
        title: "Hey! Sorry!",
        description: `But for now you cant create a collection...`,
      });
    } catch (error) {
      toast({
        title: "Hey! Sorry!",
        description: `something wrong...`,
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="my-5 lg:w-3/6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <InputName form={form} />
          <InputDescription editorRef={editorRef} form={form} />
          <SelectTopic form={form} />
          <UploadImage form={form} setImage={setImage} />
          <CustomFields
            form={form}
            customFields={customFields}
            setCustomFields={setCustomFields}
          />

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => route.back()}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <Loader2 className="animate-spin w-4 h-4" />
              ) : (
                "Create"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CollectionForm;
