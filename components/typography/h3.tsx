import { HTMLAttributes, ReactElement } from "react";
import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/shadcn";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const H3 = (props: HeadingProps): ReactElement => {
  return (
    <h3
      {...props}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        props.className
      )}
    >
      <Balancer>{props.children}</Balancer>
    </h3>
  );
};

export default H3;
