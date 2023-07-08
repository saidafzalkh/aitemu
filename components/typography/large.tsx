import { HTMLAttributes, ReactElement } from "react";
import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/shadcn";

interface PProps extends HTMLAttributes<HTMLParagraphElement> {}

const Large = (props: PProps): ReactElement => {
  return (
    <p
      {...props}
      className={cn(
        "text-lg font-semibold [&:not(:first-child)]:mt-6",
        props.className
      )}
    >
      <Balancer>{props.children}</Balancer>
    </p>
  );
};

export default Large;
