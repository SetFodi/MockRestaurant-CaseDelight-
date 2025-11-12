import { Reveal } from "@/components/reveal";

const timeline = [
  {
    year: "2011",
    title: "Origins in Kakheti",
    description:
      "Our founders began aging wines in family qvevri, hosting intimate supper clubs celebrating heirloom recipes.",
  },
  {
    year: "2015",
    title: "Casa Atelier Opens",
    description:
      "Chef Elene transforms traditional recipes through modernist techniques, attracting culinary explorers worldwide.",
  },
  {
    year: "2020",
    title: "Wine Library Expansion",
    description:
      "We curate over 200 Georgian vintages, forging partnerships with independent growers across the Caucasus.",
  },
  {
    year: "2024",
    title: "Casa Delight Experience",
    description:
      "A cinematic salon blending gastronomy, art, and soundscapes for evenings that linger well past dessert.",
  },
];

export function ExperienceTimeline() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 lg:px-10">
      <div className="rounded-[2.5rem] border border-white/25 bg-white/70 p-6 shadow-xl backdrop-blur dark:border-white/10 dark:bg-zinc-900/70 sm:p-10">
        <p className="eyebrow text-amber-500/70">Milestones</p>
        <h2 className="section-heading">A decade of crafting unforgettable evenings.</h2>

        <div className="mt-8 space-y-8">
          {timeline.map((item, index) => (
            <Reveal key={item.year} delay={index * 0.08}>
              <div className="grid items-start gap-4 border-l border-black/10 pl-6 text-black/80 dark:border-white/15 dark:text-white/70 sm:grid-cols-[160px_1fr] sm:items-center sm:gap-10 sm:pl-10">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-[0.3em] text-amber-600 dark:text-amber-300">
                    {item.year}
                  </span>
                  <span className="hidden h-px w-12 bg-amber-400 sm:inline-flex" />
                </div>
                <div>
                  <p className="font-serif text-xl text-black dark:text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-black dark:text-white/70">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

