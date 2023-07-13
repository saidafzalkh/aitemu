import { ReactElement } from "react";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "./ui/button";

const CollectionCard = (): ReactElement => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bookshelf: Manga</CardTitle>
        <CardDescription>Open collection to view details...</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Open collection</Button>
      </CardFooter>
    </Card>
  );
};

export default CollectionCard;
