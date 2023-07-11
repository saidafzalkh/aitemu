import Link from "next/link";

import Icons from "../icons";
import Navigation from "../nav";
import Search from "../search";
import { Separator } from "../ui/separator";

const Header = async () => {
  return (
    <header className="w-full flex items-center justify-between py-4 container fixed top-0 bg-background">
      <div className="flex gap-4">
        <Link href="/">
          <Icons.logo size={36} />
        </Link>
      </div>

      <div className="flex gap-4 items-center h-5">
        <Search className="hidden md:flex" />
        <Separator className="hidden md:block" orientation="vertical" />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
