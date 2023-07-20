import { ReactElement } from "react";

import { prisma } from "@/lib/prisma";

import CollectionCardMain from "../collection-card-main";
import H2 from "../typography/h2";

const TopCollections = async (): Promise<ReactElement> => {
  const collections = await prisma.collection.findMany({
    take: 5,
    orderBy: {
      items: {
        _count: "desc",
      },
    },
    include: {
      owner: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  return (
    <section className="my-20">
      <H2>Top Largest Collections</H2>
      <div className="mt-5 flex flex-wrap gap-4">
        {collections.map((collection) => (
          <CollectionCardMain key={collection.id} collection={collection} />
        ))}
      </div>
    </section>
  );
};

export default TopCollections;
