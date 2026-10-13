import { Icon } from "./icon";

type Testimonial = {
  quote: string;
  name: string;
  initials: string;
  role: string;
  avatarClass: string;
  roleClass: string;
};

// Placeholder quotes from the design. Replace with real student testimonials.
const testimonials: Testimonial[] = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    name: "Mateo Ramirez",
    initials: "MR",
    role: "English Learner • Software Engineer",
    avatarClass: "bg-ocean/15 text-ocean border-ocean/30",
    roleClass: "text-ocean",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sem sit amet dolor vulputate ultrices non ac nisl. Vivamus tincidunt risus sit amet lectus condimentum, a maximus ipsum finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    name: "Sarah Jenkins",
    initials: "SJ",
    role: "Spanish Learner • Healthcare Staff",
    avatarClass: "bg-tangerine/20 text-tangerine border-tangerine/30",
    roleClass: "text-toffee",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Mauris vulputate justo vitae eros scelerisque, nec tincidunt sem eleifend. Phasellus euismod magna vel purus tincidunt fermentum. Proin interdum justo et mi ultrices, vitae sollicitudin turpis hendrerit.",
    name: "David Chen",
    initials: "DC",
    role: "Bilingual Cohort • Relocation Student",
    avatarClass: "bg-ocean/20 text-ocean border-ocean/30",
    roleClass: "text-ocean",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-cream py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-tangerine/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-tangerine">
            <Icon name="recommend" className="text-sm" />
            Student Stories
          </div>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Student Testimonials
          </h2>
          <p className="mt-2 text-base text-ink/70">See what Camilingual graduates have to say:</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-3xl border border-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="mb-4 flex items-center gap-1 text-tangerine" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Icon key={i} name="star" filled className="text-lg" />
                  ))}
                </div>
                <blockquote className="font-serif text-sm leading-relaxed text-ink/80 italic">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-skyline/20 pt-6">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-extrabold ${t.avatarClass}`}
                >
                  {t.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-ink">{t.name}</span>
                  <span className={`text-xs font-medium ${t.roleClass}`}>{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div
          id="trial"
          className="mt-16 flex flex-col items-center justify-between gap-8 rounded-3xl bg-linear-to-r from-ink to-ocean p-8 text-white shadow-xl sm:p-12 lg:flex-row"
        >
          <div className="max-w-xl text-center lg:text-left">
            <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-extrabold tracking-wider uppercase">
              Get Started Today
            </span>
            <h3 className="font-serif text-2xl font-extrabold sm:text-3xl">
              Ready to bridge the language gap?
            </h3>
            <p className="mt-2 text-sm text-white/85 sm:text-base">
              Book your complimentary 15-minute diagnostic session with Camila and discover your custom
              learning path.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:camilingualbiz@gmail.com"
              className="rounded-xl bg-toffee px-7 py-3.5 text-sm font-extrabold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Claim Free Trial
            </a>
            <a
              href="tel:5743204518"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/20"
            >
              Call Cami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
