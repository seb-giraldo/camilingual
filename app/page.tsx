import { Courses } from "./_components/courses";
import { Hero } from "./_components/hero";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { Testimonials } from "./_components/testimonials";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="w-full flex-1">
        <Hero />
        <Courses />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  );
}
