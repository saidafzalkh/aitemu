import { HTMLAttributes, ReactElement, ReactNode } from "react";

import {
    Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger
} from "@/components/ui/sheet";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

enum MenuSides {
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom",
  LEFT = "left",
}

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  trigger?: ReactNode;
  headingtitle?: string;
  headingdescription?: string;
  side?: MenuSides;
}

const Menu = (props: MenuProps): ReactElement => {
  return (
    <div {...props}>
      <Sheet>
        <SheetTrigger asChild>
          {props.trigger || (
            <Button size="sm" variant="ghost">
              Menu
            </Button>
          )}
        </SheetTrigger>
        <SheetContent side={props.side}>
          <SheetHeader>
            <SheetTitle>{props.headingtitle}</SheetTitle>
            <SheetDescription>{props.headingdescription}</SheetDescription>
          </SheetHeader>
          <Separator className="my-4" />
          <div>{props.children}</div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Menu;
