import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Send, FileText, Github, Linkedin, Mail } from "lucide-react";
import utkarshPhoto from "@/assets/utkarsh-photo.png";
import Magnetic from "@/components/portfolio/Magnetic";

const Hero = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
    {/* Subtle grid bg with Parallax */}
    <motion.div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        y: backgroundY,
        backgroundImage:
          "linear-gradient(hsl(250 80% 65%) 1px, transparent 1px), linear-gradient(90deg, hsl(250 80% 65%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
    {/* Radial glow */}
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
      style={{ background: "radial-gradient(circle, hsl(230 80% 65%), transparent 70%)" }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.1, 0.06] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="section-container relative z-10 w-full">
      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center md:justify-start mb-8"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </span>
      </motion.div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="shrink-0"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-br from-primary to-primary/30">
            <img
              src={utkarshPhoto}
              alt="Utkarsh Rai"
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Text content */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeInOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Utkarsh Rai</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeInOut" }}
            className="text-muted-foreground font-mono text-base md:text-lg mb-4"
          >
            Full Stack Developer &bull; DSA Enthusiast
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeInOut" }}
            className="text-foreground/80 text-base md:text-lg font-medium leading-relaxed tracking-wide mb-8 max-w-xl"
          >
            I build scalable full-stack web applications and solve real-world problems
            using code. Passionate about creating impactful digital experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeInOut" }}
            className="flex items-center justify-center md:justify-start gap-3 flex-wrap mb-8 z-50 relative"
          >
            <Magnetic>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-95 duration-200 shadow-lg shadow-violet-500/20"
              >
                View Projects <ArrowRight size={16} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:border-primary/50 hover:text-primary transition-colors active:scale-95 duration-200 bg-background/50 backdrop-blur-md"
              >
                <Send size={16} /> Contact Me
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://drive.google.com/file/d/1ZfX614M20s5V7AKs3oZJc1vd5xHWsrrh/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:border-primary/50 hover:text-primary transition-colors active:scale-95 duration-200 bg-background/50 backdrop-blur-md"
              >
                <FileText size={16} /> Check CV
              </a>
            </Magnetic>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center md:justify-start gap-4"
          >
            {[
              { href: "https://github.com/Utkarshxx", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/utkarshxx/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:urai35157@gmail.com", icon: Mail, label: "Email" },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
        <motion.div
          className="w-1 h-2 rounded-full bg-primary"
          animate={{ opacity: [1, 0.3, 1], y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  </section>
  );
};

export default Hero;
