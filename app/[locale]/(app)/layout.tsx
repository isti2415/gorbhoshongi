import Nav from "@/components/Nav";
import { unstable_setRequestLocale } from "next-intl/server";
import { redirect, useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <div className="flex flex-col items-center pt-16">
      <Nav />
      {children}
    </div>
  );
}
