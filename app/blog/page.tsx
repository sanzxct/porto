import { posts } from "#site/content"
import Link from "next/link"

import { sortPosts } from "@/lib/utils"
import { link } from "fs"

export default async function Page() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published))

  return (
    <div className="">
      {sortedPosts?.length > 0 ? (
        <ul className="">
          {sortedPosts.map((post) => {
            const { title, slug } = post
            return (
              <Link href={slug}>
                {title}
              </Link>
            )
          })}
        </ul>
      ) : (
        <p>Nothing to see here yet</p>
      )}
    </div>
  )
}
