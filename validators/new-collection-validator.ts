import { z } from "zod";

export const fieldTypeEnum = z.enum(["string", "text", "number", "date"]);

const customFields = z
  .object({
    name: z.string(),
    type: fieldTypeEnum,
  })
  .array();

export const CollectionFormValidator = z.object({
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
  custom_fields: customFields,
});

export type CustomFieldsType = z.infer<typeof customFields>;

export type CollectionType = z.infer<typeof CollectionFormValidator>;
