"use client";

import Link from "next/link";
import { ReactElement } from "react";

import {
    NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const NavUser = (): ReactElement => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <Link href="/dashboard" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Dashboard
          </NavigationMenuLink>
        </Link>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavUser;
