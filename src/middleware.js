import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const locale =
    pathname === "/en" || pathname.startsWith("/en/")
      ? "en"
      : pathname === "/es" || pathname.startsWith("/es/")
        ? "es"
        : "fr";
  const response = NextResponse.next();
  response.headers.set("x-locale", locale);
  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon|images|api).*)"],
};
