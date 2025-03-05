import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySession } from "@/auth/index";

const publicRoutes = ["/auth/login"];

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);
  if (isPublicRoute) {
    return NextResponse.next();
  }

  const payload = await verifySession();
  if (!payload) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
