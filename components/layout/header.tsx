import { Lock, Menu as MenuIcon, Settings as SettingsIcon, Table as TableIcon } from "lucide-react";
import Link from "next/link";

import { getAuthSession } from "@/lib/auth";

import { SignOutButton } from "../auth/auth-buttons";
import Icons from "../icons";
import Menu from "../menu";
import Search from "../search";
import Settings from "../settings";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { UserAvatar } from "../user-avatar";

const Header = async () => {
  const session = await getAuthSession();

  return (
    <header className="w-full flex items-center justify-between py-4 container fixed top-0 bg-background">
      <div className="flex gap-4">
        <Link href="/">
          <Icons.logo size={36} />
        </Link>
      </div>

      <div className="flex gap-4 items-center h-5">
        <Search className={session?.user ? "" : "hidden md:inline-flex"}>
          Search...
        </Search>

        <Separator className="hidden md:block" orientation="vertical" />

        {session?.user ? (
          <Menu
            trigger={
              <UserAvatar
                className="cursor-pointer bg-foreground"
                img={session.user.image || ""}
              />
            }
            headingTitle={session.user.name || "User"}
            headingDescription={session.user.email || ""}
          >
            <div className="flex flex-col gap-4  w-full">
              <ul>
                <li>
                  <Button asChild variant="link" size="sm">
                    <Link href="/profile">
                      <TableIcon className="w-4 h-4 mr-2" />
                      Dashboard
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button asChild variant="link" size="sm">
                    <Link href="/settings">
                      <SettingsIcon className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button asChild variant="link" size="sm">
                    <Link href="/admin">
                      <Lock className="w-4 h-4 mr-2" />
                      Admin Panel
                    </Link>
                  </Button>
                </li>
                <Separator className="my-4" />
                <li>
                  <SignOutButton size="sm" variant="link" />
                </li>
              </ul>
            </div>
          </Menu>
        ) : (
          <>
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
          </>
        )}

        {!session?.user && (
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
              <Search>Search...</Search>
              <Button size="sm" asChild variant="secondary" className="w-full">
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </div>
          </Menu>
        )}
      </div>
    </header>
  );
};

export default Header;
