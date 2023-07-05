import { cn } from "@/lib/shadcn";
import { HTMLAttributes, ReactElement } from "react";

interface PProps extends HTMLAttributes<HTMLParagraphElement> {}

const P = (props: PProps): ReactElement => {
  return (
    <p
      {...props}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", props.className)}
    >
      {props.children}
    </p>
  );
};

export default P;
