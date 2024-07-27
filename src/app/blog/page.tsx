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
      <p className="mb-4">{`Check back soon...`}</p>
      <div className="my-8">{/* <BlogPosts /> */}</div>
    </section>
  );
}
