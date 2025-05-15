import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { posts } from "#site/content"

import { SITE_CONSTANT } from "@/lib/constants"

import { Mdx } from "@/components/blog/mdx"
import { Tag } from "@/components/macro/tag"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import "@/styles/mdx.css"

import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

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
    authors: { name: SITE_CONSTANT.author },
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
          <h1 className="mb-6 text-center font-serif text-4xl">{post.title}</h1>

          {/* Profile */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <Avatar className="rounded-md">
              <AvatarImage
                src="https://github.com/msafdev.png"
                alt="@msafdev"
              />
              <AvatarFallback className="rounded-md">MS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-sm font-medium text-foreground">
                {post.author}
              </p>
              <p className="text-xs font-medium text-muted-foreground">
                {post.author_email}
              </p>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative aspect-video rounded-[20px] border bg-muted p-2">
            <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-muted">
              <Image
                src={post.image}
                alt={`Cover photo of /${post.slug}`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8 mt-4 flex flex-wrap items-center justify-center gap-2">
            {post.tags?.map((tag) => <Tag tag={tag} key={tag} />)}
          </div>

          {/* MDX Wrapper */}
          <Mdx code={post.body} />

          <div className="mt-8 flex justify-center gap-3">
            <Button variant={"default"} size={"icon"} className="size-8 p-0">
              <ArrowLeft size={16} />
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
