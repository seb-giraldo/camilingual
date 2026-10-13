import { Icon } from "./icon";

const headshotMask =
  "radial-gradient(90% 80% at 50% 45%, black 45%, rgba(0, 0, 0, 0.6) 70%, transparent 100%)";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Ambient background orbs */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-96 w-96 rounded-full bg-skyline/25 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-0 h-[480px] w-[480px] rounded-full bg-tangerine/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-start gap-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-skyline/50 bg-skyline/20 px-3.5 py-1.5 text-ocean">
              <span className="h-2 w-2 animate-pulse rounded-full bg-ocean" />
              <span className="text-xs font-extrabold uppercase tracking-wider">
                English &amp; Spanish Tutoring
              </span>
            </div>

            <h1 className="font-serif text-5xl leading-[1.08] font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Cami<span className="text-toffee">Lingual</span>
            </h1>

            <p className="max-w-xl font-serif text-2xl leading-snug font-bold text-ocean sm:text-3xl">
              One language stands between you and your goals. Let’s bridge the gap.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#courses"
                className="rounded-xl bg-ocean px-7 py-3.5 text-base font-bold text-white shadow-md shadow-ocean/20 transition-all hover:-translate-y-0.5"
              >
                Explore Courses
              </a>
              <a
                href="#trial"
                className="rounded-xl bg-toffee px-7 py-3.5 text-base font-bold text-white shadow-md shadow-toffee/20 transition-all hover:-translate-y-0.5"
              >
                Book Free Trial
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-ink/70">
              <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-1.5 shadow-soft">
                <Icon name="star" filled className="text-lg text-tangerine" />
                <span className="font-bold text-ink">4.9/5 Rating</span>
                <span>(80+ students)</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-1.5 shadow-soft">
                <Icon name="verified" filled className="text-lg text-ocean" />
                <span>CEFR Certified Levels A1–C2</span>
              </div>
            </div>
          </div>

          <div id="about" className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -right-4 z-20 flex rotate-2 items-center gap-2 rounded-2xl border border-line bg-white px-4 py-2 shadow-float transition-transform hover:rotate-0">
                <span className="h-2.5 w-2.5 rounded-full bg-toffee" />
                <span className="text-xs font-extrabold text-ink">Bilingual Native Coach</span>
              </div>

              {/* Headshot placeholder: swap the inner block for an <Image> once the photo is ready. */}
              <div
                className="relative flex w-full items-center justify-center overflow-hidden pt-8 pb-16"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.7) 0%, rgba(250,247,242,0) 70%)",
                  maskImage: headshotMask,
                  WebkitMaskImage: headshotMask,
                }}
              >
                <div className="flex w-full flex-col items-center justify-center p-6 text-center">
                  <div className="mb-4 flex h-36 w-36 flex-col items-center justify-center rounded-full border-2 border-dashed border-ocean/40 bg-ocean/15 text-ocean shadow-inner">
                    <Icon name="person" className="text-5xl" />
                    <span className="mt-1 text-[11px] font-bold tracking-tight uppercase">Headshot</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-ink">Camila Giraldo</h3>
                  <p className="mt-0.5 text-sm font-semibold text-ocean">Founder &amp; Bilingual Tutor</p>
                  <p className="mt-2 text-xs text-ink/50 italic">(Client headshot will be placed here)</p>
                </div>
              </div>

              <div className="relative z-20 mx-2 -mt-10 rounded-2xl border border-line bg-white/95 p-6 shadow-panel backdrop-blur-md transition-all hover:shadow-2xl lg:-mt-12">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="flex items-center gap-1.5 text-sm font-extrabold uppercase tracking-wider text-ocean">
                    <Icon name="psychology" className="text-base" />
                    About Me:
                  </h4>
                  <span className="rounded-full bg-tangerine/15 px-2 py-0.5 text-[11px] font-bold text-tangerine">
                    Lead Educator
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-ink/80 sm:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-skyline/20 pt-3 text-xs">
                  <span className="font-semibold text-ocean">Fluent in English &amp; Español</span>
                  <span className="font-bold text-toffee">DELE &amp; TEFL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
