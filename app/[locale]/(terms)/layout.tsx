import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { Button } from "@/components/ui/button";

interface layoutProps {
  children?: ReactNode;
}

export default function LocaleLayout({ children }: layoutProps) {
  return (
    <div className="py-10 ">
      <article className="container sm:max-w-4xl m-auto">
        <Button className="self-start mb-20" size="sm" variant="ghost" asChild>
          <Link href="/">
            <ChevronLeft size={16} className="mr-2" />
            Home
          </Link>
        </Button>
        {children}
      </article>
    </div>
  );
}
