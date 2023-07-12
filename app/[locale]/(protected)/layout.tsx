import { ReactNode } from "react";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  return <div className="container mt-20">{children}</div>;
};

export default DashboardLayout;
