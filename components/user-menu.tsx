import { Lock, SettingsIcon, TableIcon } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";

import { getAuthSession } from "@/lib/auth";

import { SignOutButton } from "./auth/auth-buttons";
import Settings from "./settings";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { SheetClose } from "./ui/sheet";

const UserMenu = async (): Promise<ReactElement> => {
  const session = await getAuthSession();

  return (
    <div className="flex flex-col gap-4  w-full">
      <ul>
        <li>
          <SheetClose asChild>
            <Button asChild variant="link" size="sm">
              <Link href="/dashboard">
                <TableIcon className="w-4 h-4 mr-2" />
                Dashboard
              </Link>
            </Button>
          </SheetClose>
        </li>

        <li>
          <SheetClose asChild>
            <Button asChild variant="link" size="sm">
              <Link href="/settings">
                <SettingsIcon className="w-4 h-4 mr-2" />
                Settings
              </Link>
            </Button>
          </SheetClose>
        </li>

        {session?.user.role === "ADMIN" && (
          <li>
            <SheetClose asChild>
              <Button asChild variant="link" size="sm">
                <Link href="/admin">
                  <Lock className="w-4 h-4 mr-2" />
                  Admin Panel
                </Link>
              </Button>
            </SheetClose>
          </li>
        )}

        <Separator className="my-4" />
        <Settings />
        <Separator className="my-4" />

        <li>
          <SignOutButton size="sm" variant="link" />
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
