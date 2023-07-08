import Link from "next/link";
import { ReactElement } from "react";

import H1 from "./typography/h1";
import Large from "./typography/large";
import { Button } from "./ui/button";

const About = (): ReactElement => {
  return (
    <article className="flex flex-col gap-2 sm:w-5/6 w-full my-40">
      <H1>What is it?</H1>
      <Large>
        Are you tired of struggling to organize your collections? 😫🗂️
        Don&apos;t worry, we&apos;ve got you covered! With our innovative
        platform, you can create personalized collections and effortlessly keep
        track of all your precious items. 🎉💼
      </Large>
      <Large>
        Need to find that specific book or mark? No problem! Our powerful search
        feature makes it a breeze to locate any item within your collections.
        🧐🔎
      </Large>
      <Large>
        But wait, there&apos;s more! 😊🌟 You don&apos;t have to manage your
        collections alone. Join our vibrant community of collectors who share
        the same passion as you. Connect, interact, and discover new treasures
        together! 💪👥
      </Large>
      <Large>
        Share your thoughts, like what others have collected, and leave comments
        to spark meaningful conversations. Let the excitement unfold as you dive
        into the world of collections! 💬🤝
      </Large>
      <Large>
        So, what are you waiting for? 🚀🔥 Take control of your collections
        today and experience the joy of organizing in a whole new way. Join our
        community now and let the adventure begin! 🎊💪
      </Large>
      <div className="mt-4">
        <Button asChild>
          <Link href="/sign-up">Join</Link>
        </Button>
      </div>
    </article>
  );
};

export default About;
