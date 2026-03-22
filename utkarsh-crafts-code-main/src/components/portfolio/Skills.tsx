import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    items: ["C++", "JavaScript", "C", "PHP", "Java"],
    className: "",
  },
  {
    title: "Frameworks & Libraries",
    items: ["Next.js", "React.js", "Node.js", "Express.js", "HTML", "CSS", "Tailwind CSS"],
    className: "",
  },
  {
    title: "Tools & Databases",
    items: ["Git", "GitHub", "Postman", "MySQL", "MongoDB", "Supabase"],
    className: "",
  },
  {
    title: "Soft Skills",
    items: ["Problem Solving", "Team Player", "Adaptability", "Work Ethics"],
    className: "md:col-span-2",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

const Skills = () => (
  <section id="skills" className="section-container relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center mb-16"
    >
      <div className="flex flex-col items-center text-center">
        <p className="text-violet-400 font-mono text-sm mb-2">02. Skills</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Technologies I work with</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
      </div>
    </motion.div>

    <motion.div
      className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {categories.map((cat) => (
        <motion.div
          key={cat.title}
          variants={item}
          className={`bg-card/30 border border-border/50 rounded-xl p-6 md:p-8 hover:bg-card/50 transition-colors ${cat.className}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            <h3 className="text-xl font-semibold tracking-wide">{cat.title}</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {cat.items.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full bg-secondary/30 text-secondary-foreground text-sm font-medium border border-border/50 hover:bg-secondary/70 hover:text-violet-400 transition-colors cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Skills;
