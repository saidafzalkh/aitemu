import { ReactNode } from "react";

import Header from "@/components/layout/header";

interface Props {
  children: ReactNode;
}

const CollectionLayout = ({ children }: Props) => {
  return (
    <>
      <Header className="border-b z-10" />
      <section className="container">
        <div className="pt-20 h-full">{children}</div>
      </section>
    </>
  );
};

export default CollectionLayout;
