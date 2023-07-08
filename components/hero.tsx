import Link from "next/link";
import { ReactElement } from "react";

import H1 from "./typography/h1";
import Lead from "./typography/lead";
import { Button } from "./ui/button";

const Hero = (): ReactElement => {
  return (
    <div className="flex flex-col gap-2 sm:w-4/6 w-full mt-20">
      <H1>Welcome to our Open-Source Collection Management Tool! 📚</H1>
      <Lead>
        Create personalized collections, track your items (books, marks, etc.),
        and easily search within them. Join our community and take control of
        your collections today! 🎉
      </Lead>
      <Lead>Start organizing with us now! 🚀</Lead>
      <div className="flex gap-4 mt-4">
        <Button asChild>
          <Link href="/sign-up">Get Started</Link>
        </Button>
        <Button variant="outline">
          <Link href="#">GitHub</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
