import { HTMLAttributes, ReactElement } from "react";
import { Balancer } from "react-wrap-balancer";

import { cn } from "@/lib/shadcn";

interface PProps extends HTMLAttributes<HTMLParagraphElement> {}

const Small = (props: PProps): ReactElement => {
  return (
    <p
      {...props}
      className={cn("text-sm text-muted-foreground", props.className)}
    >
      <Balancer>{props.children}</Balancer>
    </p>
  );
};

export default Small;
