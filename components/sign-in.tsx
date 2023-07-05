import Link from "next/link";
import { HTMLAttributes, ReactElement } from "react";

import { cn } from "@/lib/shadcn";

import Icons from "./icons";
import SignInForm from "./sign-in-form";
import P from "./typography/p";
import { Button } from "./ui/button";

interface SignProps extends HTMLAttributes<HTMLDivElement> {}

const SignIn = (props: SignProps): ReactElement => {
  return (
    <div className={cn("w-full flex flex-col gap-4", props.className)}>
      <SignInForm />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-4/5 m-auto border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="w-4/5 m-auto flex gap-4">
        <Button variant="outline" size="sm" className="w-full">
          <Icons.google className="h-4 w-4 mr-2 fill-foreground" />
          Google
        </Button>
        <Button variant="outline" size="sm" className="w-full">
          <Icons.github className="h-4 w-4 mr-2 fill-foreground" />
          GitHub
        </Button>
      </div>

      <P className=" text-center">
        Don&apos;t have an account?
        <Button size="sm" asChild variant="link">
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </P>
    </div>
  );
};

export default SignIn;
