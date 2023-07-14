import Link from "next/link";
import { ReactElement } from "react";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "./ui/button";

const CollectionNew = (): ReactElement => {
  return (
    <Card className="border-dashed">
      <CardHeader>
        <CardTitle>Create a new collection</CardTitle>
        <CardDescription>
          Create a new collection to start keeping your items.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="secondary" className="w-full" asChild>
          <Link href="/collection/new">Create</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CollectionNew;
