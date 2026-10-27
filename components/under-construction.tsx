import { Icon } from "@/components/icon";

export function UnderConstruction({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="grid min-h-[calc(100vh-1px)] place-items-center max-[760px]:min-h-[calc(100svh-110px)]">
      <section className="max-w-[400px] p-8 text-center">
        <div className="mx-auto mb-7 grid size-[53px] place-items-center rounded-[17px] border border-green-border bg-gradient-to-br from-white to-[#eef4f0] text-[#50766b] shadow-[0_7px_20px_#253e3210]">
          <Icon name="persona" className="size-[25px]" />
        </div>
        <p className="mb-[9px] text-[10px] leading-[1.4] font-bold tracking-[1.25px] text-[#8b918d]">A NOTE FROM PERSONA</p>
        <h1 className="mb-3 font-serif text-[30px] font-medium tracking-[-0.7px]">{title}</h1>
        <p className="mx-auto mb-[25px] text-sm leading-[1.7] text-[#858c89]">{description}</p>
        <span className="inline-flex items-center gap-2 rounded-[20px] border border-[#e8eae6] bg-white px-3 py-2 text-[11px] text-[#78807c]">
          <span className="size-1.5 rounded-full bg-gold" />
          Under construction
        </span>
      </section>
    </div>
  );
}
