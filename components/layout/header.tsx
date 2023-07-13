import Link from "next/link";
import { HTMLAttributes } from "react";

import { getAuthSession } from "@/lib/auth";
import { cn } from "@/lib/shadcn";

import Icons from "../icons";
import Navigation from "../nav";
import Search from "../search";
import { Separator } from "../ui/separator";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Header = async ({ className }: Props) => {
  const session = await getAuthSession();

  return (
    <header
      className={cn(
        "w-full flex items-center justify-between py-4 container fixed top-0 left-0 bg-background",
        className
      )}
    >
      <div className="flex gap-4">
        <Link href="/">
          <Icons.logo size={36} />
        </Link>
      </div>

      <div className="flex gap-4 items-center h-5">
        <Search className={!session?.user ? "hidden md:flex" : ""} />
        <Separator className="hidden md:block" orientation="vertical" />
        <Navigation session={session?.user!} />
      </div>
    </header>
  );
};

export default Header;
