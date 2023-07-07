"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HTMLAttributes, ReactElement } from "react";

import { Button } from "./ui/button";

interface buttonProps extends HTMLAttributes<HTMLButtonElement> {}

export const Back = ({ ...props }: buttonProps): ReactElement => {
  const route = useRouter();
  return (
    <Button {...props} size="sm" variant="ghost" onClick={() => route.back()}>
      <ChevronLeft size={16} className="mr-2" />
      Back
    </Button>
  );
};

export const Home = ({ ...props }: buttonProps): ReactElement => {
  return (
    <Button {...props} size="sm" variant="ghost" asChild>
      <Link href="/">
        <ChevronLeft size={16} className="mr-2" />
        Home
      </Link>
    </Button>
  );
};
