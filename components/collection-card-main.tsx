import { ImageOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card";
import { formatDate } from "@/helpers/format-date";
import { cn } from "@/lib/shadcn";
import { Collection } from "@prisma/client";

import Small from "./typography/small";
import { AspectRatio } from "./ui/aspect-ratio";
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
  const image: string =
    collection.image === null || collection.image === ""
      ? "/no-image.jpg"
      : collection.image;

  return (
    <Card className="w-[350px]">
      <div className="w-full">
        <AspectRatio ratio={3 / 2}>
          <Image
            src={image}
            alt={collection.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <CardHeader>
        <CardTitle>{collection.name}</CardTitle>
        <CardDescription>{collection.owner.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <Small>{formatDate(collection.createdAt)}</Small>
        <Small>{collection.topic}</Small>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="h-8 w-full rounded-sm"
        >
          <Link
            aria-label="Preview product"
            href={`/collection/${collection.id}`}
          >
            View collection
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CollectionCardMain;
