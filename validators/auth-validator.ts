import { z } from "zod";

export const FormSchema = z.object({
  name: z.string(),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z
    .string()
    .nonempty({ message: "This field has to be filled." })
    .min(8, { message: "Too short" }),
});

export type FormType = z.infer<typeof FormSchema>;
