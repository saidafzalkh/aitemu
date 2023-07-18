import dayjs from "dayjs";
import { AtSign, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import DescriptionRender from "@/components/description-render";
import H1 from "@/components/typography/h1";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

interface Props {
  params: {
    id: string;
  };
}

const Page = async ({ params }: Props) => {
  const collection = await prisma.collection.findFirst({
    where: { id: params.id },
  });

  if (!collection) notFound();

  const owner = await prisma.user.findFirst({
    where: { id: collection.ownerId },
  });

  const session = await getAuthSession();

  const isOwnerOrAdmin =
    (owner?.id === session?.user.id && owner !== null) ||
    session?.user.role === "ADMIN";

  const image: string =
    collection.image === null || collection.image === ""
      ? "/no-image.jpg"
      : collection.image;

  return (
    <section>
      <article>
        <div className="w-full">
          <AspectRatio ratio={14 / 4}>
            <Image
              fill
              src={image}
              alt={collection.name}
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>

        <H1>{collection.name}</H1>

        <Separator className="mt-4 mb-2" />

        <div className="flex justify-between items-center">
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div className="flex gap-1 items-center">
              <Calendar className="w-4 h-4" />
              {dayjs(collection.createdAt).format("YYYY-MM-DD")}
            </div>
            <Separator orientation="vertical" />
            <div className="flex gap-1 items-center">
              <Tag className="w-4 h-4" />
              {collection.topic}
            </div>
            <Separator orientation="vertical" />
            <div className="flex gap-1 items-center">
              <AtSign className="w-4 h-4" />
              {owner?.name}
            </div>
          </div>
          {isOwnerOrAdmin && <div>Owner</div>}
        </div>

        <DescriptionRender content={collection.description} />
      </article>
    </section>
  );
};

export default Page;
