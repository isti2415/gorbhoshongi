import BreadCrumbComponent from "@/components/BreadcrumbComponent";
import Nav from "@/components/Nav";
import { Separator } from "@/components/ui/separator";
import { unstable_setRequestLocale } from "next-intl/server";
export default function DashboardLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <div className="flex flex-col items-center pt-16 container w-screen">
      <Nav params={{ locale }} />
      <Separator />
      <BreadCrumbComponent
        params={{ locale }}
        className="place-self-start py-4"
      />
      <div className="mt-2 mb-24 w-full flex flex-col items-center">{children}</div>
    </div>
  );
}
