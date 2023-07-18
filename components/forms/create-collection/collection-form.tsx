"use client";

import axios, { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
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
import { useMutation } from "@tanstack/react-query";

import CustomFields from "./custom-fields";
import InputDescription from "./input-description";
import InputName from "./input-name";
import { SelectTopic } from "./select-topic";
import UploadImage from "./upload-image";

import type EditorJS from "@editorjs/editorjs";
const CollectionForm = () => {
  const router = useRouter();
  const [customFields, setCustomFields] = useState<FieldsAsType>([]);
  const [image, setImage] = useState<File>();
  const [loading, setLoading] = useState<boolean>(false);
  const editorRef = useRef<EditorJS>();

  const form = useForm<CollectionType>({
    resolver: zodResolver(CollectionFormSchema),
    defaultValues: {
      description: null,
      name: "",
      topic: "",
      fields: customFields,
      image: "",
    },
  });

  const { toast } = useToast();
  const route = useRouter();

  const { mutate: createCollection, isLoading } = useMutation({
    mutationFn: async (payload: CollectionType) => {
      const { data } = await axios.post("/api/collection/create", payload);
      console.log(data);
      return data;
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 409) {
          return toast({
            title:
              "Collection with this name already exists in your dashboard.",
            description: "Please choose a different name.",
            variant: "destructive",
          });
        }

        if (err.response?.status === 422) {
          return toast({
            title: "Invalid collection data.",
            description: "Please field form by instruction below",
            variant: "destructive",
          });
        }
      }

      toast({
        title: "There was an error.",
        description: "Could not create collection try letter.",
        variant: "destructive",
      });
    },
    onSuccess: (data) => {
      router.push(`/collection/${data.id}`);

      return toast({
        description: "Your collection has been created",
      });
    },
  });

  async function onSubmit(values: CollectionType) {
    setLoading(true);
    try {
      if (image) {
        const [res] = await uploadFiles({
          files: [image as File],
          endpoint: "imageUploader",
        });
        values.image = res.fileUrl;
      }

      const payload: CollectionType = {
        ...values,
        description: await editorRef.current?.save(),
      };

      createCollection(payload);
      console.log(payload);

      toast({
        title: "Hey!",
        description: `Your Response sended`,
      });
    } catch (error) {
      toast({
        title: "Error!",
        description: `Something went wrong wile sending response try again.`,
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
            <Button type="submit" disabled={loading || isLoading}>
              {loading || isLoading ? (
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
