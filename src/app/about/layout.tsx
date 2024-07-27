import DefaultLayout from "@/layouts/default";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
