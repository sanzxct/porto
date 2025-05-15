export const SectionHeader = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className="flex max-w-lg flex-col gap-2">
      <h2 className="text-balance text-center font-serif text-xl md:text-2xl">
        {title}
      </h2>
      <p className="text-balance text-center text-xs text-muted-foreground md:text-base">
        {description}
      </p>
    </div>
  )
}
