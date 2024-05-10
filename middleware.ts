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

  if (!authStore.isValid && request.url.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
