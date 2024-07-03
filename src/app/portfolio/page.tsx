import { title } from "@/components/primitives";
import { Projects } from "@/components/projects";
import config from "@/config/config.json";

export default function Page() {
  return (
    <section>
      <h1 className={title()}>{config.headline}</h1>
      <p className="mb-4">{config.subheadline}</p>
      <div className="my-8">
        <Projects />
      </div>
    </section>
  );
}
