import { HTMLAttributes, ReactElement } from "react";
import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/shadcn";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const H1 = (props: HeadingProps): ReactElement => {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        props.className
      )}
    >
      <Balancer>{props.children}</Balancer>
    </h1>
  );
};

export default H1;
