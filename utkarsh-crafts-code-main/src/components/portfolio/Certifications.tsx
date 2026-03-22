import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "DSA in Java",
    org: "Cipher Schools",
    year: "2024",
    desc: "Comprehensive training in Data Structures and Algorithms using Java, focusing on problem-solving and optimization.",
    link: "https://www.cipherschools.com/certificate/preview?id=68947408cec61f8eee566ef4",
  },
  {
    title: "Git & GitHub",
    org: "Cipher Schools",
    year: "2024",
    desc: "Version control mastery with Git and collaborative development using GitHub.",
    link: "https://github.com/Utkarshxx/Certificates/blob/main/Screenshot%202025-11-23%20232833.png",
  },
  {
    title: "Privacy and Security in Online Social Media",
    org: "NPTEL",
    year: "2024",
    desc: "Understanding security principles and privacy considerations in social media platforms.",
    link: "https://drive.google.com/file/d/1kWaASc9PC9jGw-muO6du0fvkAAsZxBiy/view?usp=drive_link",
  },
  {
    title: "Build Generative AI Apps and Solutions with No-Code Tools",
    org: "Udemy",
    year: "2025",
    desc: "Hands-on experience in building AI-powered applications without writing code, utilizing modern no-code platforms.",
    link: "https://github.com/Utkarshxx/Certificates/blob/main/Build%20Generative%20AI%20Apps%20and%20Solutions%20with%20No-Code%20Tools.",
  },
  {
    title: "Master Generative AI & Generative AI Tools",
    org: "Infosys Springboard",
    year: "2025",
    desc: "15 hours of hands-on training covering modern generative AI tools and workflows.",
    link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_014157710267834368237/f710eea2-68a1-4250-b36d-78300ef8372e.pdf",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Certifications = () => (
  <section id="certifications" className="section-container relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center mb-16"
    >
      <div className="flex flex-col items-center text-center">
        <p className="text-violet-400 font-mono text-sm mb-2">05. Certifications</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Credentials</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
      </div>
    </motion.div>

    <motion.div
      className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {certs.map((c) => (
        <motion.div
          key={c.title}
          variants={item}
          className="bg-card/30 border border-border/50 rounded-2xl p-6 md:p-8 hover:bg-card/50 transition-colors flex flex-col h-full"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-xl bg-violet-950/40 flex items-center justify-center text-violet-400 border border-violet-900/50 shadow-inner">
              <Award size={24} />
            </div>
            <span className="text-muted-foreground text-sm font-medium">{c.year}</span>
          </div>

          <h3 className="text-xl font-bold mb-2 leading-tight">{c.title}</h3>
          <p className="text-violet-400 text-sm font-medium mb-4">{c.org}</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
            {c.desc}
          </p>

          <a
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-violet-400 hover:text-cyan-300 text-sm font-bold transition-colors w-fit group"
          >
            <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /> View Credential
          </a>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Certifications;
