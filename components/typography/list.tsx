import { HTMLAttributes, ReactElement } from "react";

import { cn } from "@/lib/shadcn";

interface ULProps extends HTMLAttributes<HTMLUListElement> {}
interface LIProps extends HTMLAttributes<HTMLLIElement> {}

export const UL = (props: ULProps): ReactElement => {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", props.className)}>
      {props.children}
    </ul>
  );
};

export const OL = (props: ULProps): ReactElement => {
  return (
    <ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", props.className)}>
      {props.children}
    </ol>
  );
};

export const LI = (props: LIProps): ReactElement => {
  return <li className={props.className}>{props.children}</li>;
};
