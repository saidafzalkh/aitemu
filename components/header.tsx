import { Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";

import Icons from "./icons";
import Menu from "./menu";
import Search from "./search";
import Settings from "./settings";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Header = (): ReactElement => {
  return (
    <header className="w-full flex items-center justify-between py-4 container">
      <div>
        <Link href="/">
          <Icons.logo size={36} />
        </Link>
      </div>
      <div className="flex gap-4 items-center h-5">
        <Search className="hidden md:inline-flex">Search...</Search>

        <Separator className="hidden md:block" orientation="vertical" />

        <Button
          className="hidden md:inline-flex"
          size="sm"
          variant="ghost"
          asChild
        >
          <Link href="/sign-in">Sign In</Link>
        </Button>

        <Button size="sm">
          <Link href="/sign-up">Sign Up</Link>
        </Button>

        <Menu
          trigger={
            <Button size="sm" className="md:hidden inline-flex" variant="ghost">
              <MenuIcon size={18} />
            </Button>
          }
        >
          <div className="flex flex-col gap-4 mt-10">
            <Settings className="flex md:hidden" />
            <Search>Search...</Search>
            <Button size="sm" asChild variant="secondary" className="w-full">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
