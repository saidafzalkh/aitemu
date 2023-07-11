import { ReactNode } from "react";

import { Back } from "@/components/back";

interface layoutProps {
  children?: ReactNode;
}

export default function LocaleLayout({ children }: layoutProps) {
  return (
    <div className="py-10 ">
      <article className="container sm:max-w-4xl mx-auto mt-20">
        <Back className="self-start mb-10" />
        {children}
      </article>
    </div>
  );
}
