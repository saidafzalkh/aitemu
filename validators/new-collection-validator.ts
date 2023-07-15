import { z } from "zod";

const FieldsSchema = z
  .object({
    name: z
      .string()
      .nonempty({ message: "Enter a name for this field or remove it" }),
    type: z
      .string()
      .nonempty({ message: "Select type for this field or remove it" }),
  })
  .array();

export const CollectionFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Collection name must be at least 3 characters." })
    .max(36, { message: "The collection name must not exceed 36 characters." })
    .nonempty({ message: "This field has to be filled." }),
  description: z
    .string()
    .min(3, {
      message: "Collection description must be at least 3 characters.",
    })
    .max(266, {
      message: "The collection description must not exceed 266 characters.",
    }),
  topic: z
    .string({
      required_error: "Please select a topic.",
    })
    .nonempty({ message: "Please select a topic." }),
  fields: FieldsSchema,
});

export type FieldsAsType = z.infer<typeof FieldsSchema>;

export type CollectionType = z.infer<typeof CollectionFormSchema>;
