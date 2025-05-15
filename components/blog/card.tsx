import { Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDate } from "@/lib/utils";
import { Tag } from "@/components/macro/tag";

interface CardProps {
  slug: string;
  title: string;
  image: string;
  description?: string;
  date: string;
  tags?: Array<string>;
}

export function Card({ slug, title, description, date, tags }: CardProps) {
  return (
    <article className="flex flex-col gap-2 py-4">
      <h2 className="text-2xl font-serif">
        <Link href={"/" + slug}>{title}</Link>
      </h2>
      <div className="flex gap-2">
        {tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <div className="max-w-none text-muted-foreground line-clamp-2">
        {description}
      </div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-xs md:text-sm font-medium flex items-center gap-1.5">
            <Calendar className="size-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={"/" + slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
