import { cn } from "@/lib/shadcn";
import { HTMLAttributes, ReactElement } from "react";
import Small from "./typography/small";

interface navProps extends HTMLAttributes<HTMLElement> {}

const NavFooter = (props: navProps): ReactElement => {
  return (
    <nav {...props} className={cn("", props.className)}>
      <ul>
        <li>
          <Small className="font-bold mb-1 text-secondary-foreground">
            Navigation
          </Small>
        </li>
        <li>
          <Small>Sign In</Small>
        </li>
        <li>
          <Small>Sign Up</Small>
        </li>
        <li>
          <Small>Collections</Small>
        </li>
        <li>
          <Small>Items</Small>
        </li>
      </ul>
    </nav>
  );
};

export default NavFooter;
