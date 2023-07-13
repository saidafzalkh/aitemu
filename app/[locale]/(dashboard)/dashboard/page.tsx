import { HeartHandshake } from "lucide-react";
import { redirect } from "next/navigation";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getAuthSession } from "@/lib/auth";

const Page = async () => {
  const session = await getAuthSession();

  if (!session?.user) redirect("/sign-in");

  return (
    <div>
      <Alert>
        <HeartHandshake className="h-5 w-5" />
        <AlertTitle>Hello, {session?.user.name}</AlertTitle>
        <AlertDescription>
          This is your profile page here you can create and manage your
          collections!
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default Page;
