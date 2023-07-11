import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession();

  if (session?.user) redirect("/sign-in");
  console.log(session);

  return <div className="container mt-20">{children}</div>;
};

export default DashboardLayout;
