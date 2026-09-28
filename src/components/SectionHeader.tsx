import { Reveal } from "@/components/Reveal";

export function SectionHeader({
  eyebrow,
  title,
  lead,
  center = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-brand-950 sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={160}>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}