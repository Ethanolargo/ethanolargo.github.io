/* ============================================================
   YOUR PROJECTS LIVE HERE ✏️
   ============================================================
   To add a project, copy one of the blocks below (everything
   from `{` to `},`) and fill in your own info. The website
   updates automatically — no other file needs to change.

   Field guide:
     title       — the project's name (required)
     description — 1–3 sentences about what it does (required)
     tags        — list of technologies used (shows as little chips)
     emoji       — a big icon shown on the card (pick any emoji!)
     image       — OPTIONAL: a screenshot/GIF instead of the emoji.
                   Put the file in the images/ folder, then write
                   e.g.  image: "images/myproject.png",
     demo        — OPTIONAL: link to a live demo or video
     github      — OPTIONAL: link to the source code
   ============================================================ */

const projects = [

  {
    title: "Smart Diet Tracker",
    description:
      "Full-stack diet and weight tracker with JWT authentication, live " +
      "streak tracking, and an interactive calendar for backfilling missed " +
      "days. Calculates personalized TDEE and macro targets (Mifflin-St Jeor " +
      "& Katch-McArdle), charts 30-day weight and 14-day calorie trends, " +
      "and auto-generates monthly progress summaries.",
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Prisma", "SQLite", "Recharts"],
    emoji: "🥗",
    demo: "",
    github: "https://github.com/Ethanolargo/smart-diet-tracker",
  },
  {
    title: "BJJ Note-Taking App",
    description:
      "Mobile app for logging daily Brazilian Jiu-Jitsu training notes, " +
      "with a tabbed journal for reviewing past sessions and a built-in " +
      "database of 27 techniques that surfaces definitions as you log your " +
      "moves. Entries persist locally with AsyncStorage.",
    tags: ["React Native", "Expo", "TypeScript", "AsyncStorage"],
    emoji: "🥋",
    demo: "",
    github: "https://github.com/Ethanolargo/bjj-notes",
  },

];

/* ============================================================
   YOUR SKILLS ✏️  — shown as floating chips in the Skills section.
   Add, remove, or reorder freely.
   ============================================================ */
const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "SQL",
  "HTML & CSS",
  "PHP",
  "React",
  "React Native",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "REST APIs",
  "JWT Authentication",
  "Prisma",
  "SQLite",
  "Git & GitHub",
  "AI-Assisted Development",
  "Problem Solving",
];
