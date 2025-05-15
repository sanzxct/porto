import { Metadata } from "next"
import { posts } from "#site/content"

import { sortPosts } from "@/lib/utils"

import { Card } from "@/components/blog/card"

export const metadata: Metadata = {
  title: "My blog",
  description: "This is a description",
}

export default async function Page() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published))

  return (
    <div className="relative z-0 flex min-h-svh items-center py-32">
      <div className="container flex flex-col items-center gap-y-6 md:gap-y-8">
        {sortedPosts?.length > 0 ? (
          <ul className="flex max-w-lg flex-col">
            {sortedPosts.map((post) => {
              const { slug, date, title, description, tags, image, author } =
                post
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
              )
            })}
          </ul>
        ) : (
          <p>Nothing to see here yet</p>
        )}
      </div>
    </div>
  )
}
