import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const collections = prisma.collection.findMany({
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

    if (!collections) return new Response(JSON.stringify([]), { status: 204 });

    return new Response(JSON.stringify(collections), { status: 200 });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
