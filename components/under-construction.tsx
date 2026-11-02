export function UnderConstruction({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="grid min-h-96 content-center gap-3 text-center">
      <h1 className="font-serif text-2xl">{title}</h1>
      <p className="mx-auto max-w-md text-sm leading-relaxed text-stone-600">
        {description}
      </p>
      <p className="text-sm text-stone-500">Under construction</p>
    </section>
  );
}
