"use client";
import { title } from "@/components/primitives";
import { Projects } from "@/components/projects";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  console.log(pathname);
  const currentNavItem = siteConfig.navItems.find(
    (item) => item.href === pathname
  );

  return (
    <section>
      <h1 className={title()}>{currentNavItem?.content.headline}</h1>
      <p className="mb-4">{`Check back soon...`}</p>
      <div className="my-8">{/* <Projects /> */}</div>
    </section>
  );
}
