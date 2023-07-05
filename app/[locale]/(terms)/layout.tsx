import { ReactNode } from "react";

interface layoutProps {
  children?: ReactNode;
}

export default function LocaleLayout({ children }: layoutProps) {
  return (
    <div className="py-10 ">
      <article className="w-full sm:max-w-4xl m-auto">{children}</article>
    </div>
  );
}
