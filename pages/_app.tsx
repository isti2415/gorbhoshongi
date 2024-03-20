import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/theme-provider";
import { AccessibilityToggle } from "@/components/accessibility-toggles";
import { Wix_Madefor_Display, Noto_Sans_Bengali } from "next/font/google";
import { useRouter } from "next/router";

// If loading a variable font, you don't need to specify the font weight
const english = Wix_Madefor_Display({ subsets: ["latin"] });
const bengali = Noto_Sans_Bengali({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main
        className={locale === "bn-BD" ? bengali.className : english.className}
      >
        <Component {...pageProps} />
        <AccessibilityToggle />
      </main>
    </ThemeProvider>
  );
}
