import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-950 pb-16 pt-14 text-sand-100 sm:pb-20 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 texture-dots opacity-60" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="container-page relative">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent-400">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-sand-100/70 sm:text-lg">
              {lead}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={240}>
            <div className="mt-9">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}