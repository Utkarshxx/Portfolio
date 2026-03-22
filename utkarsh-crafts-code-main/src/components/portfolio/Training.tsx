import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const Training = () => (
  <section id="training" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Training</h2>
      <div className="mt-8 glass-card">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen size={20} className="text-primary" />
          <h3 className="text-lg font-semibold">Data Structures & Algorithms in Java</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-1">Cipher Schools</p>
        <p className="text-muted-foreground text-sm leading-relaxed mt-3">
          Comprehensive training covering Arrays, Strings, HashMaps, Linked Lists,
          Stacks, Queues, Trees, and Graphs. Practiced extensively on LeetCode,
          CodeStudio, and HackerRank to reinforce problem-solving skills.
        </p>
      </div>
    </motion.div>
  </section>
);

export default Training;
