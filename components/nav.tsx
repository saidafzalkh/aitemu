import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";

import { getAuthSession } from "@/lib/auth";

import Menu from "./menu";
import Search from "./search";
import Settings from "./settings";
import { Button } from "./ui/button";
import { UserAvatar } from "./user-avatar";
import UserMenu from "./user-menu";

const Navigation = async (): Promise<ReactElement> => {
  const session = await getAuthSession();

  return (
    <nav className="flex items-center">
      {session ? (
        <Menu
          trigger={
            <UserAvatar className="cursor-pointer" user={session.user} />
          }
          headingtitle={session.user.name || "User"}
          headingdescription={session.user.email || ""}
        >
          <UserMenu />
        </Menu>
      ) : (
        <div className="flex gap-4 justify-start items-center">
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

          {!session && (
            <Menu
              trigger={
                <Button
                  size="sm"
                  className="md:hidden inline-flex"
                  variant="ghost"
                >
                  <MenuIcon size={18} />
                </Button>
              }
            >
              <div className="flex flex-col gap-4 mt-10">
                <Settings className="flex md:hidden" />
                <Search />
                <Button
                  size="sm"
                  asChild
                  variant="secondary"
                  className="w-full"
                >
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </div>
            </Menu>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
