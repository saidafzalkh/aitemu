import { z } from "zod";

import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { CollectionFormSchema } from "@/validators/new-collection-validator";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session) return new Response("Unauthorized", { status: 401 });

    const body = await req.json();
    const data = CollectionFormSchema.parse(body);

    const collectionExists = await prisma.collection.findFirst({
      where: {
        ownerId: session.user.id,
        name: data.name,
      },
    });

    if (collectionExists) {
      return new Response("You already have collection with this name", {
        status: 409,
      });
    }

    const collection = await prisma.collection.create({
      data: {
        name: data.name,
        ownerId: session.user.id,
        description: data.description,
        fields: data.fields,
        image: data.image,
        topic: data.topic,
      },
    });

    return new Response(JSON.stringify(collection));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response("Cant create collection", { status: 500 });
  }
}
