import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaClient";
import createSession from "@/lib/createSession";
export async function POST(req: NextRequest) {
  const { name, email, password } = (await req.json()) as any;
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  const session = await createSession(user.id);

  return NextResponse.json({ user, session });
}
