import "server-only";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function verifySession() {
  const cookie = cookies().get("session")?.value;
  if (!cookie) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(
      cookie,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    return payload;
  } catch (error) {
    return null;
  }
}
