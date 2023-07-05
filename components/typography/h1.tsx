import { cn } from "@/lib/shadcn";
import { HTMLAttributes, ReactElement } from "react";

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
      {props.children}
    </h1>
  );
};

export default H1;
