import { Courses } from "./components/Courses";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full flex-1">
        <Hero />
        <Courses />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
