import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DashboardLayout = async () => {
  const session = await getServerSession();

  if (session?.user) redirect("/sign-in");

  return <div className="container"></div>;
};

export default DashboardLayout;
