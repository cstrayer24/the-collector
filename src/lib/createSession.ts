import { cookies } from "next/headers";
import prisma from "./prismaClient";
import futureDates from "future-dates";
async function createSession(userId: string) {
  const session = await prisma.session.create({
    data: {
      userId: userId,
      expiresAt: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  cookies().set("isLoggedIn", "1");
  cookies().set({
    httpOnly: true,
    name: "sessionId",
    expires: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
    path: "/",
    value: session.id,
  });
  return session;
}
export default createSession;
