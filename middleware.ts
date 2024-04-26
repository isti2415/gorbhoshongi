import createMiddleware from "next-intl/middleware";
import { locales } from "./config";
import { NextRequest, NextResponse } from "next/server";

const nextIntlMiddleware =  createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "never",
});

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req: NextRequest): NextResponse {
  return nextIntlMiddleware(req)
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
