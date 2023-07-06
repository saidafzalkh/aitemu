"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { HTMLAttributes, ReactElement } from "react";

import { Button } from "./ui/button";

interface buttonProps extends HTMLAttributes<HTMLButtonElement> {}

const Back = ({ ...props }: buttonProps): ReactElement => {
  const route = useRouter();
  return (
    <Button {...props} size="sm" variant="ghost" onClick={() => route.back()}>
      <ChevronLeft size={16} className="mr-2" />
      Back
    </Button>
  );
};

export default Back;
