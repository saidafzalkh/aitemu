import { cn } from "@/lib/shadcn";
import { HTMLAttributes, ReactElement } from "react";

interface PProps extends HTMLAttributes<HTMLParagraphElement> {}

const Lead = (props: PProps): ReactElement => {
  return (
    <p className={cn("text-xl text-muted-foreground", props.className)}>
      {props.children}
    </p>
  );
};

export default Lead;
