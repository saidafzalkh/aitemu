"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { ReactElement } from "react";

import { cn } from "@/lib/shadcn";

import Icons from "../icons";
import { Button, ButtonProps } from "../ui/button";

interface buttonProps extends ButtonProps {}

export const GoogleButton = ({ ...props }: buttonProps) => {
  return (
    <Button
      variant={props.variant || "outline"}
      size={props.size || "sm"}
      className={cn("", props.className)}
    >
      <Icons.google className="fill-foreground mr-2" />
      Google
    </Button>
  );
};

export const GithubButton = ({ ...props }: buttonProps) => {
  return (
    <Button
      variant={props.variant || "outline"}
      size={props.size || "sm"}
      className={cn("", props.className)}
    >
      <Icons.github className="fill-foreground mr-2" />
      GitHub
    </Button>
  );
};

export const SignOutButton = ({ ...props }: buttonProps): ReactElement => {
  return (
    <Button {...props} onClick={() => signOut()}>
      <LogOut className="h-4 w-4 mr-2" />
      Sign Out
    </Button>
  );
};
