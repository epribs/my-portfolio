import { title } from "@/components/primitives";
import { BlogPosts } from "@/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className={title()}>My Blog</h1>
      <div className="mt-4">
        <BlogPosts />
      </div>
    </section>
  );
}
