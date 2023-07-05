import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ReactElement } from "react";

import H3 from "@/components/typography/h3";
import { Button } from "@/components/ui/button";
import SignIn from "@/components/sign-in";
import Small from "@/components/typography/small";

const Page = (): ReactElement => {
  return (
    <>
      <Button className="self-start" size="sm" variant="ghost" asChild>
        <Link href="/">
          <ChevronLeft size={16} className="mr-2" />
          Home
        </Link>
      </Button>
      <H3>Welcome Back!</H3>
      <SignIn />
      <Small className="w-5/6 md:w-3/4 text-center">
        By continuing, you are setting up an Aitemu account and agree to our
        <Button size="sm" variant="link">
          <Link href="user-agreements">User Agreement</Link>
        </Button>{" "}
        and{" "}
        <Button size="sm" variant="link">
          <Link href="privacy-policy">Privacy Policy</Link>
        </Button>
      </Small>
    </>
  );
};

export default Page;
