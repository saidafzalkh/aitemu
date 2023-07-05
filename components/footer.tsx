import { HTMLAttributes, ReactElement } from "react";

import { cn } from "@/lib/shadcn";

import Copyright from "./copyright";
import NavFooter from "./nav-footer";
import NavSocial from "./nav-social";
import Settings from "./settings";

interface basicElement extends HTMLAttributes<HTMLElement> {}

const FooterItem = (props: basicElement): ReactElement => {
  return <div className={cn("w-full", props.className)}>{props.children}</div>;
};

const Footer = (): ReactElement => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-20">
      <div className="container grid sm:grid-cols-2 md:grid-cols-4">
        <FooterItem className="hidden md:flex">
          <Settings />
        </FooterItem>
        <FooterItem className="flex flex-col gap-4">
          <NavFooter />
          <NavSocial />
        </FooterItem>
        <FooterItem className="md:col-start-3 md:col-end-5 mt-4 md:mt-0">
          <Copyright />
        </FooterItem>
      </div>
    </footer>
  );
};

export default Footer;
