import { notFound } from "next/navigation";

import CollectionInfo from "@/components/collection-info";
import ItemsTable from "@/components/table/items-table";
import { generateDynamicColumns } from "@/components/table/table-config";
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

  async function getData(): Promise<[]> {
    return [];
  }

  const columns = generateDynamicColumns(collection?.fields);
  const data = await getData();

  return (
    <section>
      <CollectionInfo collection={collection} />

      <div className="my-8">
        <ItemsTable columns={columns} data={data} />
      </div>
    </section>
  );
};

export default Page;
