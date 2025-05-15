import { posts } from "#site/content";
import { Mdx } from "@/components/blog/mdx";
import { notFound } from "next/navigation";

import { Metadata } from "next";
import { SITE_CONSTANT } from "@/lib/constants";
import { Tag } from "@/components/macro/tag";
import Grain from "@/assets/images/grain.jpg";

import "@/styles/mdx.css";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

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
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="py-32 relative z-0">
      <div className="container flex flex-col items-center z-0">
        <div className="max-w-xl">
          <h1 className="mb-6 text-4xl font-serif text-center">{post.title}</h1>
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Avatar className="rounded-md">
              <AvatarImage
                src="https://github.com/msafdev.png"
                alt="@msafdev"
              />
              <AvatarFallback className="rounded-md">MS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-foreground text-sm font-medium">
                {post.author}
              </p>
              <p className="text-muted-foreground font-medium text-xs">
                {post.author_email}
              </p>
            </div>
          </div>
          <div className="aspect-video p-2 rounded-[20px] border bg-muted relative">
            <div className="relative w-full h-full rounded-[12px] overflow-hidden bg-muted">
              <Image
                src={post.image}
                alt={`Cover photo of /${post.slug}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="items-center justify-center flex gap-2 flex-wrap mt-4 mb-8">
            {post.tags?.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
          <Mdx code={post.body} />
        </div>
      </div>
    </article>
  );
}
