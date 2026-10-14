import { Carousel } from "./Carousel";
import { Icon } from "./Icon";

type Accent = "ocean" | "tangerine" | "toffee";

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
  tangerine: {
    badge: "bg-tangerine",
    text: "text-tangerine",
    iconBox: "bg-tangerine/15 text-tangerine group-hover:bg-tangerine",
    titleHover: "group-hover:text-tangerine",
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
    tag: "1-on-1 English",
    meta: "A1 – C2",
    icon: "person_pin",
    title: "Private English tutoring for all ages, CEFR Levels A1-C2",
    description:
      "Targeted individual sessions focused on conversational confidence, accent reduction, writing polish, and academic exam prep.",
    highlights: [
      "Individualized diagnostic roadmap",
      "TOEFL, IELTS, & Cambridge prep",
      "Flexible scheduling for all ages",
    ],
    footnote: "Tailored Pace",
    cta: { label: "Enroll Now", href: "#trial" },
    accent: "ocean",
  },
  {
    tag: "1-on-1 Español",
    meta: "A1 – C2",
    icon: "translate",
    title: "Private Spanish tutoring for all ages, CEFR Levels A1-C2",
    description:
      "Real-world Latin American and Castilian fluency, mastering the subjunctive, regional dialects, and spontaneous dialogue.",
    highlights: [
      "DELE & SIELE exam accreditation",
      "Conversational immersion practice",
      "Cultural idioms & pronunciation",
    ],
    footnote: "Full Immersion",
    cta: { label: "Enroll Now", href: "#trial" },
    accent: "tangerine",
  },
  {
    tag: "Cohort Studio",
    meta: "Max 5 Students",
    icon: "groups",
    title: "Group classes for English and Spanish",
    description:
      "Engaging small-group workshops where you exchange ideas with peers at matching proficiency levels under Camila’s guidance.",
    highlights: [
      "Dynamic role-play simulations",
      "Interactive collaborative games",
      "Cost-effective peer learning",
    ],
    footnote: "Community Powered",
    cta: { label: "Join Cohort", href: "#trial" },
    accent: "ocean",
  },
  {
    tag: "Enterprise & B2B",
    meta: "Custom Syllabus",
    icon: "business_center",
    title: "Staff language training for a variety of professions",
    description:
      "Specialized sector curriculum for corporate teams, healthcare staff, hospitality personnel, and legal assistants.",
    highlights: [
      "Medical & clinical intake dialogue",
      "Client negotiations & etiquette",
      "Progress analytics for managers",
    ],
    footnote: "Corporate Ready",
    cta: { label: "Inquire Now", href: "#contact" },
    accent: "toffee",
  },
];

function CourseCard({ course }: { course: Course }) {
  const accent = accents[course.accent];
  return (
    <article className="group flex w-full shrink-0 snap-start flex-col justify-between rounded-3xl border-2 border-line-strong bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold text-white ${accent.badge}`}
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
  return (
    <section
      id="courses"
      className="relative border-y border-line bg-sand py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Carousel
          heading={
            <>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-ocean/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ocean">
                <Icon name="school" className="text-sm" />
                Programs &amp; Formats
              </div>
              <h2 className="font-serif text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Class Offerings &amp; Tutoring Paths
              </h2>
            </>
          }
        >
          {courses.map((course) => (
            <CourseCard key={course.tag} course={course} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
