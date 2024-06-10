import createMiddleware from "next-intl/middleware";
import { locales } from "./config";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "./lib/pocketbase";

const nextIntlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "never",
});

// eslint-disable-next-line import/no-anonymous-default-export
export default function (request: NextRequest): NextResponse {
  const response = nextIntlMiddleware(request);

  const cookieStore = cookies();

  const { authStore } = createServerClient(cookieStore);

  if (
    authStore.isValid &&
    (request.url.endsWith("/login") || request.url.endsWith("/register"))
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!authStore.isValid && !request.url.endsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
