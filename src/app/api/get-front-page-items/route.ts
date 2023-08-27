import prisma from "@/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const allItems = await prisma.item.findMany();
  const items = [];

  for (let i = 0; i < 5; i++) {
    items.push(allItems[Math.floor(Math.random() * allItems.length)]);
  }

  return NextResponse.json(items);
}
