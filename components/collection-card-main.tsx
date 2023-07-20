import Link from "next/link";

import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card";
import { formatDate } from "@/helpers/format-date";
import { cn } from "@/lib/shadcn";
import { Collection } from "@prisma/client";

import Small from "./typography/small";
import { Button } from "./ui/button";

interface Props extends React.ComponentProps<typeof Card> {
  collection: Collection & {
    owner: {
      name: string | null;
      email: string | null;
    };
  };
}

const CollectionCardMain = ({ className, collection, ...props }: Props) => {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{collection.name}</CardTitle>
        <CardDescription>{collection.owner.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <Small># {collection.topic}</Small>
        <Small>{formatDate(collection.createdAt)}</Small>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="w-full" asChild>
          <Link href={`/collection/${collection.id}`}>Open collection</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CollectionCardMain;
