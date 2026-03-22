import { motion } from "framer-motion";
import { Code2, Target, Lightbulb, Users, MapPin } from "lucide-react";

const About = () => (
  <section id="about" className="section-container relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center mb-16"
    >
      <div className="flex flex-col items-center text-center">
        <p className="text-violet-400 font-mono text-sm mb-2">01. About Me</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Get to know me</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
      </div>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      {/* Left Column: Text */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col space-y-6"
      >
        <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
          I'm a <span className="text-foreground font-semibold">Computer Science Engineering</span> student at <span className="text-violet-400 font-medium">Lovely Professional University</span>, passionate about building innovative web solutions that make a difference.
        </p>
        <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
          My journey in tech started with a curiosity for how things work on the internet. This led me to explore <span className="text-foreground font-semibold">Full Stack Development</span>, where I love crafting seamless user experiences backed by robust server architectures.
        </p>
        <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
          When I'm not coding, you'll find me solving algorithmic challenges, contributing to open-source projects, or exploring the latest in web technologies. I believe in writing clean, maintainable code and continuously improving my craft.
        </p>
        
        <div className="flex items-center gap-2 mt-4 text-muted-foreground font-mono text-sm">
          <MapPin size={16} className="text-pink-500" />
          <span>Punjab, India</span>
        </div>
      </motion.div>

      {/* Right Column: Cards Grid */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {/* Card 1 */}
        <div className="bg-card/30 border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-colors">
          <div className="w-12 h-12 bg-violet-950/30 rounded-lg flex items-center justify-center mb-4 border border-violet-900/50 text-violet-400">
            <Code2 size={24} />
          </div>
          <h3 className="text-lg font-bold mb-2">Full Stack Developer</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Building end-to-end web applications with modern technologies
          </p>
        </div>
        
        {/* Card 2 */}
        <div className="bg-card/30 border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-colors">
          <div className="w-12 h-12 bg-emerald-950/30 rounded-lg flex items-center justify-center mb-4 border border-emerald-900/50 text-emerald-400">
            <Target size={24} />
          </div>
          <h3 className="text-lg font-bold mb-2">Problem Solver</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            200+ problems solved across LeetCode and HackerRank
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-card/30 border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-colors">
          <div className="w-12 h-12 bg-violet-950/30 rounded-lg flex items-center justify-center mb-4 border border-violet-900/50 text-violet-400">
            <Lightbulb size={24} />
          </div>
          <h3 className="text-lg font-bold mb-2">Quick Learner</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Constantly exploring new technologies and best practices
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-card/30 border border-border/50 rounded-xl p-6 hover:bg-card/50 transition-colors">
          <div className="w-12 h-12 bg-blue-950/30 rounded-lg flex items-center justify-center mb-4 border border-blue-900/50 text-blue-400">
            <Users size={24} />
          </div>
          <h3 className="text-lg font-bold mb-2">Team Player</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Collaborative mindset with strong communication skills
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
