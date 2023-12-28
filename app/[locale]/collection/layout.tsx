import { ReactNode } from "react";

import Header from "@/components/layout/header";

interface Props {
  children: ReactNode;
}

const CollectionLayout = ({ children }: Props) => {
  return (
    <>
      <section className="container">
      <Header className="border-b z-10" />
        <div className="pt-20 h-full">{children}</div>
      </section>
    </>
  );
};

export default CollectionLayout;
