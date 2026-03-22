import { motion } from "framer-motion";
import { Target, Trophy, Award, Flame, Star } from "lucide-react";

const topCards = [
  {
    icon: Target,
    number: "200+",
    title: "Problems",
    desc: "Solved on LeetCode",
    badge: "Problem Solver",
  },
  {
    icon: Trophy,
    number: "100+",
    title: "Problems",
    desc: "Solved on HackerRank",
    badge: "Consistent Performer",
  },
  {
    icon: Award,
    number: "Runner-Up",
    title: "Robotics",
    desc: "IIT Roorkee Competition",
    badge: "System Design",
  },
];

const Achievements = () => (
  <section id="achievements" className="section-container relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center mb-16"
    >
      <div className="flex flex-col items-center text-center">
        <p className="text-violet-400 font-mono text-sm mb-2">04. Achievements</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Problem Solving Journey</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
      </div>
    </motion.div>

    <div className="max-w-6xl mx-auto flex flex-col gap-10">
      {/* Top 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card/20 border border-border/50 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-card/40 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-violet-950/40 flex items-center justify-center text-violet-400 border border-violet-900/50 mb-6 shadow-md">
              <card.icon size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-1">
              {card.number} {card.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-6">{card.desc}</p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/30 border border-violet-900/30 text-xs text-violet-400 font-medium">
              <Flame size={12} className="text-violet-400" />
              {card.badge}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-card/40 border border-border/50 rounded-2xl p-8 md:p-10 flex flex-wrap justify-center gap-16 md:gap-24 items-center"
      >
        <div className="flex flex-col items-center text-center gap-2 flex-1 min-w-[120px]">
          <div className="text-4xl font-bold text-violet-400 tracking-tight">400+</div>
          <p className="text-muted-foreground text-sm font-medium">Total Problems</p>
        </div>
        <div className="flex flex-col items-center text-center gap-2 flex-1 min-w-[120px]">
          <div className="flex items-center text-4xl font-bold text-yellow-400 tracking-tight gap-1">
            5 <Star size={32} className="fill-yellow-400" />
          </div>
          <p className="text-muted-foreground text-sm font-medium">HackerRank</p>
        </div>
        <div className="flex flex-col items-center text-center gap-2 flex-1 min-w-[120px]">
          <div className="text-4xl font-bold text-violet-400 tracking-tight">3+</div>
          <p className="text-muted-foreground text-sm font-medium">Years Coding</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Achievements;
