import Link from "next/link"

import { Calendar } from "lucide-react"

import { cn, formatDate } from "@/lib/utils"

import { Tag } from "@/components/shared/tag"
import { buttonVariants } from "@/components/ui/button"

interface CardProps {
  slug: string
  title: string
  image: string
  description?: string
  date: string
  tags?: Array<string>
}

export function Card({ slug, title, description, date, tags }: CardProps) {
  return (
    <article className="flex flex-col gap-2 py-4">
      <h2 className="font-serif text-2xl">
        <Link href={"/" + slug}>{title}</Link>
      </h2>
      <div className="flex gap-2">
        {tags?.map((tag) => <Tag tag={tag} key={tag} />)}
      </div>
      <div className="line-clamp-2 max-w-none text-muted-foreground">
        {description}
      </div>
      <div className="flex items-center justify-between">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="flex items-center gap-1.5 text-xs font-medium md:text-sm">
            <Calendar className="size-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={"/" + slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read more
        </Link>
      </div>
    </article>
  )
}
