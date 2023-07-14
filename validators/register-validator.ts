import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().nonempty({ message: "This field has to be filled." }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z
    .string()
    .nonempty({ message: "This field has to be filled." })
    .min(8, { message: "Too short" }),
});

export type RegisterType = z.infer<typeof RegisterSchema>;
