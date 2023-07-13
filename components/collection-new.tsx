import { ReactElement } from "react";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "./ui/button";

const CollectionNew = (): ReactElement => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a new collection</CardTitle>
        <CardDescription>
          Create a new collection to start keeping your items.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Create</Button>
      </CardFooter>
    </Card>
  );
};

export default CollectionNew;
