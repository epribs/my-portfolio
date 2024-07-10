import { siteConfig } from "@/config/site";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {siteConfig.navItems[0].content?.headline}
      </h1>
      <p className="mb-4">{siteConfig.navItems[0].content?.description}</p>
    </section>
  );
}
