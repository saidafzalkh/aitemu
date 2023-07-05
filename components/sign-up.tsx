import Link from "next/link";
import { HTMLAttributes, ReactElement } from "react";

import { cn } from "@/lib/shadcn";

import Icons from "./icons";
import SignUpForm from "./sign-up-form";
import P from "./typography/p";
import { Button } from "./ui/button";

interface SignProps extends HTMLAttributes<HTMLDivElement> {}

const SignUp = (props: SignProps): ReactElement => {
  return (
    <div className={cn("w-full flex flex-col gap-4", props.className)}>
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

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-4/5 m-auto border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or create with
          </span>
        </div>
      </div>

      <SignUpForm />

      <P className=" text-center">
        Already have an account?
        <Button size="sm" asChild variant="link">
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </P>
    </div>
  );
};

export default SignUp;
