import Link from "next/link";
import { slug } from "github-slugger";
import { badgeVariants } from "@/components/ui/badge";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}
export function Tag({ tag, current, count }: TagProps) {
  return (
    <Link
      className={badgeVariants({
        variant: "default",
        className: "no-underline rounded-md text-xs font-medium",
      })}
      href={`/tags/${slug(tag)}`}
    >
      {tag} {count ? `(${count})` : null}
    </Link>
  );
}
