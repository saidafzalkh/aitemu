import { cn } from "@/lib/shadcn";
import { HTMLAttributes, ReactElement } from "react";

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
      {props.children}
    </h3>
  );
};

export default H3;
