import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

const DashboardToolbar = (): ReactElement => {
  return (
    <div className="flex gap-2 mt-4">
      <Input placeholder="Search from collections..." className="w-full" />
      <Button variant="outline" asChild>
        <Link href="/collection/new">
          <PlusCircle className="w-4 h-4 mr-2" /> New
        </Link>
      </Button>
    </div>
  );
};

export default DashboardToolbar;
