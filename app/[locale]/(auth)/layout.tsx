import { redirect } from "next/navigation";
import { ReactNode } from "react";

import { Home } from "@/components/back";
import { getAuthSession } from "@/lib/auth";

interface layoutProps {
  children?: ReactNode;
}

export default async function LocaleLayout({ children }: layoutProps) {
  const session = await getAuthSession();

  if (session?.user) redirect("/dashboard");

  return (
    <section className="absolute top-0 inset-0 min-h-fit bg-background mb-20">
      <div className="min-h-full py-10 max-w-2xl mx-auto flex flex-col items-center justify-center gap-10">
        <Home className="self-start" />
        {children}
      </div>
    </section>
  );
}
