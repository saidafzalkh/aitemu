import { ReactNode } from "react";

interface layoutProps {
  children?: ReactNode;
}

export default function LocaleLayout({ children }: layoutProps) {
  return (
    <section className="absolute top-0 inset-0 min-h-fit bg-background mb-20">
      <div className="min-h-full py-10 max-w-2xl mx-auto flex flex-col items-center justify-center gap-10">
        {children}
      </div>
    </section>
  );
}
