import { HTMLAttributes, ReactElement } from "react";
import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/shadcn";

interface PProps extends HTMLAttributes<HTMLParagraphElement> {}

const Lead = (props: PProps): ReactElement => {
  return (
    <p className={cn("text-xl text-muted-foreground", props.className)}>
      <Balancer>{props.children}</Balancer>
    </p>
  );
};

export default Lead;
