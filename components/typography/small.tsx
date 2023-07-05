import { cn } from "@/lib/shadcn";
import { HTMLAttributes, ReactElement } from "react";

interface PProps extends HTMLAttributes<HTMLParagraphElement> {}

const Small = (props: PProps): ReactElement => {
  return (
    <p
      {...props}
      className={cn("text-sm text-muted-foreground", props.className)}
    >
      {props.children}
    </p>
  );
};

export default Small;
