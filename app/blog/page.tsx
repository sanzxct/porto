import { posts } from "#site/content"

import { sortPosts } from "@/lib/utils"

export default async function Page() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published))

  return (
    <div className="">
      {sortedPosts?.length > 0 ? (
        <ul className="">
          {sortedPosts.map((post) => {
            const { title, slug } = post
            return (
              <li key={title}>
                <p>{title}</p>
              </li>
            )
          })}
        </ul>
      ) : (
        <p>Nothing to see here yet</p>
      )}
    </div>
  )
}
