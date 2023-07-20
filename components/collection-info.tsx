import { AtSign, Calendar, Settings, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import DescriptionRender from "@/components/description-render";
import H1 from "@/components/typography/h1";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/helpers/format-date";
import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import type { Collection } from "@prisma/client";
interface Props {
  collection: Collection;
}

const CollectionInfo = async ({ collection }: Props) => {
  const session = await getAuthSession();

  const owner = await prisma.user.findFirst({
    where: { id: collection.ownerId },
  });

  const isOwnerOrAdmin =
    (owner?.id === session?.user.id && owner !== null) ||
    session?.user.role === "ADMIN";

  const image: string =
    collection.image === null || collection.image === ""
      ? "/no-image.jpg"
      : collection.image;

  return (
    <article>
      <div className="w-full">
        <AspectRatio ratio={14 / 4}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="rounded-md object-cover"
            src={image}
            alt={collection.name}
          />
        </AspectRatio>
      </div>

      <H1>{collection.name}</H1>

      <Separator className="mt-4 mb-2" />

      <div className="flex justify-between sm:items-center gap-2 sm:mb-2 mb-20">
        <div className="flex flex-col sm:flex-row h-5 sm:items-center sm:space-x-4 gap-2 text-sm">
          <div className="flex gap-1 items-center">
            <Calendar className="w-4 h-4" />
            {formatDate(collection.createdAt)}
          </div>
          <Separator
            className="hidden sm:inline-block"
            orientation="vertical"
          />
          <div className="flex gap-1 items-center">
            <Tag className="w-4 h-4" />
            {collection.topic}
          </div>
          <Separator
            className="hidden sm:inline-block"
            orientation="vertical"
          />
          <div className="flex gap-1 items-center">
            <AtSign className="w-4 h-4" />
            {owner?.name}
          </div>
        </div>
        {isOwnerOrAdmin && (
          <Button variant="ghost" aria-label="settings">
            <Link href="#">
              <Settings className="w-4 h-4" />
            </Link>
          </Button>
        )}
      </div>

      <DescriptionRender content={collection.description} />
    </article>
  );
};

export default CollectionInfo;
