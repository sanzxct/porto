import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"

import { posts } from "#site/content"

import { SITE_CONSTANT } from "@/lib/constants"

import { Mdx } from "@/components/blog/mdx"

import "@/styles/mdx.css"

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = posts.find((post) => post.slugAsParams === slug)

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set("title", post.title)

  return {
    title: post.title,
    description: post.description,
    authors: { name: SITE_CONSTANT.author, url: SITE_CONSTANT.links.github },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <article className="relative z-0 py-32">
      <div className="container z-0 flex flex-col items-center">
        <div className="max-w-xl">
          <h1 className="text-3xl font-serif">{post.title}</h1>

          <div className="relative aspect-video w-full rounded-xl overflow-hidden my-4">
            <Image
              src={post.image}
              alt={`Banner for ${post.title}`}
              fill
              className="object-cover"
            />
          </div>

          {/* MDX Wrapper */}
          <Mdx code={post.body} />
        </div>
      </div>
    </article>
  )
}
