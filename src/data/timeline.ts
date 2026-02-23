export interface TimelineEvent {
  year: string;
  title: string; // e.g. "The Academy" or "First Mission"
  role: string; // e.g. "Computer Science Student"
  company: string; // e.g. "University of Tech"
  desc: string; // The story narration
  image: string; // Image URL (use placeholders for now)
  color: string; // Background accent for this panel
}

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2018 - 2022",
    title: "THE ACADEMY",
    role: "Cadet (Student)",
    company: "University of Engineering",
    desc: "In the halls of academia, our hero first discovered the arcane arts of C++ and the dark magic of pointers. While others slept, he compiled.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    color: "bg-comic-blue",
  },
  {
    year: "2025",
    title: "WINTER SHOWDOWN",
    role: "Hackathon Champion",
    company: "GDGC Winter of Code",
    desc: "Armed with Python and a vision, our hero forged Pyfyle—a profiler frontend to expose the secrets of slow code. The judges were impressed. Second place claimed. Best Freshers Team secured. Victory tastes like optimized runtime.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    color: "bg-comic-yellow",
  },
  {
    year: "2023 - PRESENT",
    title: "ENTER THE INDUSTRY",
    role: "Embedded Architect",
    company: "Tech Corp Industries",
    desc: "Thrust into the chaotic world of production code! Fighting bugs, taming wild race conditions, and deploying firmware to thousands of devices.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    color: "bg-comic-red",
  },
];
