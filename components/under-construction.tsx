import { Icon } from "@/components/icon";

export function UnderConstruction({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="placeholder-wrap">
      <section className="placeholder-card">
        <div className="placeholder-icon">
          <Icon name="spark" />
        </div>
        <p className="eyebrow">A NOTE FROM PERSONA</p>
        <h1>{title}</h1>
        <p className="placeholder-copy">{description}</p>
        <span className="coming-soon">
          <span />
          Under construction
        </span>
      </section>
    </div>
  );
}
