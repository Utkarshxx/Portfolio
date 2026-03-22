import { motion } from "framer-motion";
import { Folder, GitBranch } from "lucide-react";
import TiltCard from "@/components/portfolio/TiltCard";

const projects = [
  {
    title: "Somana",
    description:
      "AI-powered platform with storytelling, blogs, movie & music recommendations, authentication, and user-generated content. A comprehensive entertainment and content creation hub.",
    tech: ["Next.js", "React", "MongoDB", "Supabase", "REST APIs"],
    github: "https://github.com/Utkarshxx",
  },
  {
    title: "Child Labour Reporting System",
    description:
      "Secure reporting system with image upload, location tracking, verification workflow, and real-time status updates. Built to help combat child labor through technology.",
    tech: ["Next.js", "React", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Utkarshxx/Frontend-backend-Project-",
  },
  {
    title: "SkyTrack India – AI-Powered Real-Time Flight Tracker",
    description:
      "Real-time tracking of flights across Indian airspace combined with weather insights and data visualization. Its scalable architecture lays the foundation for advanced AI capabilities.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "AviationStack", "OpenWeatherMap", "Chart.js"],
    github: "https://github.com/Utkarshxx/Indian-Ai-flight-Tracker",
  },
  {
    title: "Disk Scheduling Algorithms Simulator",
    description:
      "Command-line based application designed to demonstrate and analyze various disk scheduling techniques used in operating systems. Calculates seek time and total head movement.",
    tech: ["C++", "Operating Systems", "Data Structures", "GCC"],
    github: "https://github.com/Utkarshxx/Disk-Scheduling-Algorithm",
  },
];

const Projects = () => (
  <section id="projects" className="section-container relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center mb-16"
    >
      <div className="flex flex-col items-center text-center">
        <p className="text-violet-400 font-mono text-sm mb-2">03. Projects</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
      </div>
    </motion.div>

    <div className="max-w-5xl mx-auto flex flex-col gap-10">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <TiltCard>
            <div
              className="relative bg-card/30 border border-border/50 rounded-2xl p-6 md:p-8 hover:bg-card/50 transition-colors flex flex-col md:flex-row gap-6 md:gap-8 group shadow-lg"
            >
              {/* Featured Badge */}
              <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-violet-500 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg z-10">
                Featured
              </div>

              {/* Icon */}
              <div className="shrink-0 md:pt-2">
                <div className="w-16 h-16 bg-violet-950/30 rounded-2xl flex items-center justify-center text-violet-400 border border-violet-900/50 group-hover:border-violet-500/50 transition-colors shadow-inner">
                  <Folder size={32} strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow md:pt-2 relative z-10">
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{p.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-secondary/40 text-secondary-foreground text-xs font-semibold border border-border/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pointer-events-auto">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 hover:border-cyan-500/50 hover:text-violet-400 hover:bg-violet-950/20 transition-all text-sm font-medium w-fit"
                  >
                    <GitBranch size={16} /> GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
