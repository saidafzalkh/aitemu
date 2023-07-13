"use client";

import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import { HTMLAttributes, ReactElement, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/shadcn";
import { FormSchema, FormType } from "@/validators/auth-validator";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormWrapperProps extends HTMLAttributes<HTMLDivElement> {}

const AuthForm = (props: FormWrapperProps): ReactElement => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormType) => {
    setLoading(true);
    try {
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        name: values.name || null,
        redirect: false,
      });
    } catch (error) {
      toast({
        title: "Error!",
        description:
          "There was error sign in with Github. Try again or use another Provider",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const path = usePathname();

  return (
    <div className={cn("w-4/5 m-auto", props.className)}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          {path === "/sign-up" && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="User" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input placeholder="example@email.com" {...field} />
                </FormControl>
                <FormDescription>Enter your email address.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password *</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormDescription>Enter your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            {loading ? (
              <Loader2 className="animate-spin w-4 h-4" />
            ) : path === "/sign-in" ? (
              "Sign In"
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AuthForm;
