import { title } from "@/components/primitives";
import { Projects } from "@/components/projects";
import { siteConfig } from "@/config/site";

export default function Page() {
  return (
    <section>
      <h1 className={title()}>{siteConfig.navItems[5].content.headline}</h1>
      <p className="mb-4">{siteConfig.navItems[5].content.description}</p>
      <div className="my-8">
        <Projects />
      </div>
    </section>
  );
}
