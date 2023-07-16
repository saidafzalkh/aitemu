"use client";

import { UploadCloud } from "lucide-react";
import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UseFormReturn } from "react-hook-form";

import {
    FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { uploadFiles } from "@/lib/uploadthing";
import { CollectionType } from "@/validators/new-collection-validator";

interface Props {
  form: UseFormReturn<CollectionType>;
  setImage: Dispatch<SetStateAction<File | undefined>>;
}

const UploadImage = ({ form, setImage }: Props) => {
  const [uploaded, setUploaded] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("File is uploading");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploaded(true);
    setImage(acceptedFiles[0]);
    setFileName(acceptedFiles[0].name as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <FormField
      control={form.control}
      name="image"
      render={() => (
        <FormItem>
          <FormLabel>Image (Optional)</FormLabel>
          <FormControl>
            <div
              {...getRootProps()}
              className="flex justify-center items-center w-full h-32 px-4 transition bg-background border-2 border-dashed rounded-md appearance-none cursor-pointer"
            >
              <Input {...getInputProps()} />
              {uploaded ? (
                <p className="flex items-center gap-2 text-sm text-secondary-foreground">
                  {fileName}
                </p>
              ) : isDragActive ? (
                <p className="flex items-center gap-2 text-sm text-secondary-foreground">
                  Drop the files here ...
                </p>
              ) : (
                <p className="flex items-center gap-2 text-sm text-secondary-foreground">
                  <UploadCloud className="w-4 h-4" />
                  Drag &apos;n&apos; drop some images here, or click to select
                  files
                </p>
              )}
            </div>
          </FormControl>
          <FormDescription>
            Upload an image as the collection cover
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default UploadImage;
