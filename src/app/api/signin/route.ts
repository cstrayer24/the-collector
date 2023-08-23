import createSession from "@/lib/createSession";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaClient";
import { User } from "@prisma/client";
export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const user = (await prisma.user.findFirst({
    where: {
      email,
    },
  })) as User;
  const session = await createSession(user?.id);

  return NextResponse.json({ user, session });
}
