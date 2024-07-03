import { Projects } from "@/components/projects";
import config from "@/configs/config.json";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {config.headline}
      </h1>
      <p className="mb-4">{config.subheadline}</p>
      <div className="my-8">
        <Projects />
      </div>
    </section>
  );
}
