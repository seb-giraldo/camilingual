import type { Metadata } from "next";
import { Merriweather, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
});

// Only the glyphs listed here are downloaded. Keep the list alphabetical and add to it when using a new icon.
const iconNames = [
  "arrow_back",
  "arrow_forward",
  "business_center",
  "call",
  "check_circle",
  "groups",
  "mail",
  "person",
  "person_pin",
  "psychology",
  "recommend",
  "record_voice_over",
  "school",
  "star",
  "translate",
  "verified",
].join(",");

const iconFontHref = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=${iconNames}&display=block`;

export const metadata: Metadata = {
  title: "CamiLingual | English & Spanish Tutoring",
  description:
    "Private and group English and Spanish tutoring for all ages, CEFR levels A1–C2, plus staff language training for professionals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${merriweather.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="stylesheet" href={iconFontHref} />
      </head>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
