export const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col max-w-lg gap-2">
      <h2 className="text-xl md:text-2xl font-serif text-balance text-center">
        {title}
      </h2>
      <p className="text-xs md:text-base text-muted-foreground text-balance text-center">
        {description}
      </p>
    </div>
  );
};
