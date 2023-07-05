import { cn } from "@/lib/shadcn";
import { HTMLAttributes, ReactElement } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const H2 = (props: HeadingProps): ReactElement => {
  return (
    <h2
      {...props}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        props.className
      )}
    >
      {props.children}
    </h2>
  );
};

export default H2;
