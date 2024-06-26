import { BlogPosts } from "@/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {`I'm Eric Quinn, a full-stack dev in America.`}
      </h1>
      <p className="mb-4">{`I focus on the entire webapp development lifecycle 
      with javascript/typescript and SQL. I also enjoy go and python.`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
