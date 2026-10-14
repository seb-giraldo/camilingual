"use client";
import useEmblaCarousel from "embla-carousel-react";
import { Icon } from "./Icon";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

type Accent = "ocean" | "toffee";

type Course = {
  tag: string;
  meta: string;
  icon: string;
  title: string;
  description: string;
  highlights: string[];
  footnote: string;
  cta: { label: string; href: string };
  accent: Accent;
};

// Full class strings so Tailwind can see them.
const accents: Record<
  Accent,
  { badge: string; text: string; iconBox: string; titleHover: string }
> = {
  ocean: {
    badge: "bg-ocean",
    text: "text-ocean",
    iconBox: "bg-ocean/15 text-ocean group-hover:bg-ocean",
    titleHover: "group-hover:text-ocean",
  },
  toffee: {
    badge: "bg-toffee",
    text: "text-toffee",
    iconBox: "bg-toffee/15 text-toffee group-hover:bg-toffee",
    titleHover: "group-hover:text-toffee",
  },
};

const courses: Course[] = [
  {
    tag: "Private English tutoring",
    meta: "CEFR Levels A1-C2",
    icon: "person_pin",
    title: "Private English tutoring for all ages",
    description:
      "Knowing English can be a great tool for your personal growth! It can open up endless opportunities to make connections and advance professionally. Whatever the goal may be, I will design carefully curated courses based on your personal language goals and learning style.",
    highlights: [
      "In person or online",
      "Personalized Lesson Plan created from Initial Assessment and Questionnaire",
      "Course catered to your objective and learning style",
      "Course can be edited based on your pace",
      "Extra learning materials always provided",
    ],
    footnote: "Tailored Pace",
    cta: { label: "Enroll Now", href: "#trial" },
    accent: "ocean",
  },
  {
    tag: "Private Spanish tutoring",
    meta: "CEFR Levels A1-C2",
    icon: "translate",
    title: "Private Spanish tutoring for all ages",
    description:
      "Learning Spanish can open doors for you that you may have never imagined! Spanish acquisition gives you the opportunity to make connections and advance professionally. Have you wanted to learn Spanish to connect with your coworker, friends, or partner? Have a trip planned to a predominantly Spanish speaking country and want to be more immersed in the culture? Maybe you studied Spanish in grade school or high school and retained nothing outside of a few words or phrases and want to build on that. Taking a college course and need more guided assistance?  It’s also possible that you have that foundation already and want a more in depth understanding of the language. Whatever the reason may be, I can create a curated course plan just for you.",
    highlights: [
      "In person or online",
      "Personalized Lesson Plan created from Initial Assessment and Questionnaire",
      "Course catered to your objective and learning style",
      "Course can be edited based on your pace",
      "Extra learning materials always provided",
    ],
    footnote: "Full Immersion",
    cta: { label: "Enroll Now", href: "#trial" },
    accent: "toffee",
  },
  {
    tag: "Cohort Studio",
    meta: "Max 5 Students",
    icon: "groups",
    title: "Group classes for English and Spanish",
    description:
      "Are you more motivated by learning alongside others? Looking to build a community of people with shared goals and experiences? Maybe you have a group of friends already that want an immersive language experience together! If any of these sound like you, group classes are the way to go! Group classes are separated by four levels of acquisition",
    highlights: [
      "1- CEFR Levels A1 - A2",
      "2- CEFR Levels B1 - B2",
      "3- CEFR Levels C1 - C2",
      "4- CEFR Levels D1 - D2",
    ],
    footnote: "Community Powered",
    cta: { label: "Join Cohort", href: "#trial" },
    accent: "ocean",
  },
  {
    tag: "Staff Training",
    meta: "Custom Syllabus",
    icon: "business_center",
    title: "Staff language training for a variety of professions",
    description:
      "Having your staff learn a new language can grow your business in unimaginable ways. CamiLingual’s staff language training will improve workplace communication, boost employee confidence, and expand your global business opportunities. Depending on the industry, I design 5-10 week courses for staff language training geared towards your industry and giving them applicable language necessary to connect with a variety of clientele in a way that is dynamic and engaging. My favorite aspect of staff language training is how much fun language immersion can be and how it forces people out of their comfort zones, ultimately resulting in strengthened staff dynamics and interpersonal skills.",
    highlights: [
      "In person or online",
      "courses catered to industry",
      "Dynamic collaboration",
      "Immersive learning",
    ],
    footnote: "Corporate Ready",
    cta: { label: "Inquire Now", href: "#contact" },
    accent: "toffee",
  },
];

function CourseCard({ course }: { course: Course }) {
  const accent = accents[course.accent];
  return (
    <article className="embla__slide group flex w-full shrink-0 snap-start flex-col justify-between rounded-3xl border-2 border-line-strong bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold text-white whitespace-nowrap ${accent.badge}`}
          >
            {course.tag}
          </span>
          <span className={`text-xs font-bold ${accent.text}`}>
            {course.meta}
          </span>
        </div>
        <div
          className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors group-hover:text-white ${accent.iconBox}`}
        >
          <Icon name={course.icon} className="text-2xl" />
        </div>
        <h3
          className={`font-serif text-xl leading-snug font-extrabold text-ink transition-colors ${accent.titleHover}`}
        >
          {course.title}
        </h3>
        <p className="mt-3 text-xs leading-relaxed text-ink/75 sm:text-sm">
          {course.description}
        </p>
        <ul className="mt-5 space-y-2 text-xs font-semibold text-ink/80">
          {course.highlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Icon
                name="check_circle"
                filled
                className={`text-base ${accent.text}`}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-skyline/30 pt-6">
        <span className={`text-xs font-bold ${accent.text}`}>
          {course.footnote}
        </span>
        <a
          href={course.cta.href}
          className={`inline-flex items-center gap-1 text-xs font-extrabold hover:underline ${accent.text}`}
        >
          {course.cta.label} <Icon name="arrow_forward" className="text-sm" />
        </a>
      </div>
    </article>
  );
}

export function Courses() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section
      id="courses"
      className="relative border-y border-line bg-sand py-20"
    >
      <div
        className="relative embla__viewport mx-auto max-w-7xl px-6 overflow-hidden"
        ref={emblaRef}
      >
        <div className="embla__container flex justify-start gap-4">
          {courses.map((course) => (
            <CourseCard key={course.tag} course={course} />
          ))}
        </div>
        <button
          className="embla__prev absolute top-1/2 -translate-y-1/2 -left-0 xl:hidden"
          onClick={scrollPrev}
        >
          <IoIosArrowDropleftCircle className="rounded-full text-[45px]" />
        </button>
        <button
          className="embla__prev absolute top-1/2 -translate-y-1/2 -right-0 xl:hidden"
          onClick={scrollNext}
        >
          <IoIosArrowDroprightCircle className="rounded-full text-[45px]" />
        </button>
      </div>
    </section>
  );
}
