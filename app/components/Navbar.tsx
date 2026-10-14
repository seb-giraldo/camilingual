import Link from "next/link";

const navLinks = [
  { href: "#courses", label: "Courses" },
  { href: "#testimonials", label: "Reviews" },
  { href: "/about", label: "About Cami" },
  {
    href: "https://substack.com/@camilingual",
    label: "Substack",
    target: "_blank",
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/92 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3">
          <figure className="flex w-40">
            <img
              className="w-full h-full"
              src="logo.png"
              alt="CamiLingual Logo"
            />
          </figure>
        </Link>

        <nav className="hidden items-center gap-8 text-base font-semibold text-ink/80 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.target}
              className="py-1 transition-colors hover:text-ocean"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-xl bg-toffee px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
