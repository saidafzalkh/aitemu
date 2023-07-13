import { ReactNode } from "react";

import { Back } from "@/components/back";
import Header from "@/components/layout/header";

interface layoutProps {
  children?: ReactNode;
}

export default function LocaleLayout({ children }: layoutProps) {
  return (
    <div className="py-10 ">
      <article className="container sm:max-w-4xl mx-auto mt-20">
        <Header />
        <Back className="self-start mb-10" />
        {children}
      </article>
    </div>
  );
}
