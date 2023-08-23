import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaClient";
import { cookies } from "next/headers";
export async function GET(req: NextRequest) {
  console.log(cookies().get("sessionId"));
  if (!cookies().get("sessionId")) {
    console.log("test");
    return NextResponse.json({});
  } else {
    const session = await prisma.session.findFirst({
      where: {
        id: cookies().get("sessionId")?.value,
      },
    });

    const user = await prisma.user.findFirst({
      where: {
        id: session?.userId,
      },
    });
    console.log(user);
    return NextResponse.json(user);
  }
}
