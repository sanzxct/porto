import { badgeVariants } from "@/components/ui/badge"

type TagProps = {
  tag: string
  current?: boolean
  count?: number
}

export const Tag = ({ tag, current, count }: TagProps) => {
  return (
    <div
      className={badgeVariants({
        variant: "default",
        className: "rounded-md text-xs font-medium no-underline",
      })}
    >
      {tag} {count ? `(${count})` : null}
    </div>
  )
}
