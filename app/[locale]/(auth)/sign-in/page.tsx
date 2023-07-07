import Link from "next/link";
import { ReactElement } from "react";

import SignIn from "@/components/sign-in";
import H3 from "@/components/typography/h3";
import Small from "@/components/typography/small";
import { Button } from "@/components/ui/button";

const Page = (): ReactElement => {
  return (
    <>
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
