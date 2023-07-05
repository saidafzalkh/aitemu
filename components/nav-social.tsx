import { HTMLAttributes, ReactElement } from "react";

import { cn } from "@/lib/shadcn";

import Small from "./typography/small";

interface navProps extends HTMLAttributes<HTMLElement> {}

const NavSocial = (props: navProps): ReactElement => {
  return (
    <nav {...props} className={cn("flex flex-col h-full", props.className)}>
      <ul>
        <li>
          <Small className="font-bold mb-1 text-secondary-foreground">
            Get in touch
          </Small>
        </li>
        <li>
          <Small>Linkedin</Small>
        </li>
        <li>
          <Small>Telegram</Small>
        </li>
        <li>
          <Small>Discord</Small>
        </li>
        <li>
          <Small>GitHub</Small>
        </li>
      </ul>
    </nav>
  );
};

export default NavSocial;
