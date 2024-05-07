import { unstable_setRequestLocale } from "next-intl/server";

export default function ProfileSettingsLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <div className="mt-2 lg:mt-4">
      {children}
    </div>
  );
}
