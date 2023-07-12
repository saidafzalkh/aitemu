import { Lock, SettingsIcon, TableIcon } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";

import { SignOutButton } from "./auth/auth-buttons";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const UserMenu = (): ReactElement => {
  return (
    <div className="flex flex-col gap-4  w-full">
      <ul>
        <li>
          <Button asChild variant="link" size="sm">
            <Link href="/dashboard">
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
  );
};

export default UserMenu;
