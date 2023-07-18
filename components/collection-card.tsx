import Link from "next/link";
import { ReactElement } from "react";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "./ui/button";

import type { Collection } from "@prisma/client";
interface Props {
  data: Collection;
}

const CollectionCard = ({ data }: Props): ReactElement => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
        <CardDescription>Open collection to view details...</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/collection/${data.id}`}>Open collection</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CollectionCard;
