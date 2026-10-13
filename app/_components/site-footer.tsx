import Link from "next/link";
import { Icon } from "./icon";

const linkGroups = [
  {
    title: "Courses",
    links: [
      { href: "#courses", label: "Private English (A1-C2)" },
      { href: "#courses", label: "Private Spanish (A1-C2)" },
      { href: "#courses", label: "Group Classes" },
      { href: "#courses", label: "Corporate Language Training" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { href: "/", label: "Home" },
      { href: "#about", label: "About Cami" },
      { href: "#testimonials", label: "Student Testimonials" },
      { href: "#trial", label: "Book a Free Trial" },
    ],
  },
  {
    // TODO: point these at real pages once they exist.
    title: "Support & Legal",
    links: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
      { href: "#", label: "FAQ & Cancellation" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-skyline/20 bg-ink pt-16 pb-12 font-serif text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-toffee text-white shadow-md">
                <Icon name="record_voice_over" className="text-xl" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                Cami<span className="text-skyline">Lingual</span>
              </span>
            </Link>
            <address className="mt-2 space-y-1.5 text-xs text-white/90 not-italic">
              <p className="text-sm font-bold text-toffee">Camila Giraldo</p>
              <p className="flex items-center gap-2">
                <Icon name="call" className="text-base text-skyline" />
                <a href="tel:5743204518" className="transition-colors hover:text-skyline">
                  (574) 320-4518
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Icon name="mail" className="text-base text-skyline" />
                <a href="mailto:camilingualbiz@gmail.com" className="transition-colors hover:text-skyline">
                  camilingualbiz@gmail.com
                </a>
              </p>
            </address>
          </div>

          {linkGroups.map((group, i) => (
            <div key={group.title} className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-skyline">{group.title}</span>
              <ul className="space-y-2 text-xs text-white/70">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              {i === linkGroups.length - 1 && (
                <div className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-skyline">
                  <span className="h-1.5 w-1.5 rounded-full bg-toffee" />
                  English • Español
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© 2026 CamiLingual. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
