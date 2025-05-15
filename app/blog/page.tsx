import { posts } from "#site/content";
import { Card } from "@/components/blog/card";
import { sortPosts } from "@/lib/utils";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "My blog",
  description: "This is a description",
};

export default async function Page() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  return (
    <div className="relative py-32 min-h-svh flex items-center z-0">
      <div className="container flex flex-col items-center gap-y-6 md:gap-y-8">
        {sortedPosts?.length > 0 ? (
          <ul className="flex flex-col max-w-lg">
            {sortedPosts.map((post) => {
              const { slug, date, title, description, tags, image, author } =
                post;
              return (
                <li key={slug}>
                  <Card
                    image={image}
                    slug={slug}
                    date={date}
                    title={title}
                    description={description}
                    tags={tags}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Nothing to see here yet</p>
        )}
      </div>
    </div>
  );
}
