import { signOut } from "next-auth/react";
import Link from "next/link";
import { HTMLAttributes, ReactElement } from "react";

import { getAuthSession } from "@/lib/auth";
import { cn } from "@/lib/shadcn";

import Small from "./typography/small";

interface navProps extends HTMLAttributes<HTMLElement> {}

const NavFooter = async (props: navProps): Promise<ReactElement> => {
  const session = await getAuthSession();

  return (
    <nav {...props} className={cn("", props.className)}>
      <ul>
        <li>
          <Small className="font-bold mb-1 text-secondary-foreground">
            Navigation
          </Small>
        </li>
        <li>
          <Link href="/sign-in">
            <Small>Sign In</Small>
          </Link>
        </li>
        <li>
          <Link href="/sign-up">
            <Small>Sign Up</Small>
          </Link>
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
