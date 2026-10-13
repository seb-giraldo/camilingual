import Link from "next/link";
import { Icon } from "./icon";

const navLinks = [
  { href: "#courses", label: "Courses" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#about", label: "About Cami" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/92 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-toffee text-white shadow-md shadow-toffee/20 transition-transform group-hover:scale-105">
            <Icon name="record_voice_over" className="text-2xl" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-extrabold tracking-tight text-ink">
              Cami<span className="text-toffee">Lingual</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-ocean">
              Language Studio
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-base font-semibold text-ink/80 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="py-1 transition-colors hover:text-ocean">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#trial"
          className="inline-flex items-center justify-center rounded-xl bg-toffee px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
          Book a Trial
        </a>
      </div>
    </header>
  );
}
