import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

const infoCards = [
  { icon: Mail, label: "Email", value: "urai35157@gmail.com", href: "mailto:urai35157@gmail.com" },
  { icon: Github, label: "GitHub", value: "Utkarshxx", href: "https://github.com/Utkarshxx" },
  { icon: Linkedin, label: "LinkedIn", value: "utkarshxx", href: "https://www.linkedin.com/in/utkarshxx/" },
  { icon: MapPin, label: "Location", value: "Punjab, India", href: null },
];

const Contact = () => (
  <section id="contact" className="section-container relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center mb-16"
    >
      <div className="flex flex-col items-center text-center">
        <p className="text-violet-400 font-mono text-sm mb-2">07. Contact</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mt-4 mb-4">
          I'm currently looking for new opportunities. Whether you have a question or just
          want to say hi, I'll get back to you as soon as possible!
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mt-2" />
      </div>
    </motion.div>

    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
      {/* Left Column: Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-4"
      >
        <h3 className="text-xl font-bold mb-2">Contact Information</h3>
        {infoCards.map((card, i) => {
          const ContentWrapper = card.href ? "a" : "div";
          const props = card.href ? { href: card.href, target: "_blank", rel: "noopener noreferrer" } : {};
          
          return (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              <ContentWrapper
                {...props}
                className={`flex items-center gap-4 p-4 rounded-xl bg-card/20 border border-border/50 hover:bg-card/40 transition-colors w-full ${!card.href ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="w-12 h-12 shrink-0 rounded-lg bg-violet-950/40 flex items-center justify-center text-violet-400 border border-violet-900/50">
                  <card.icon size={20} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-muted-foreground mb-1">{card.label}</span>
                  <span className="text-sm font-semibold text-foreground/90">{card.value}</span>
                </div>
              </ContentWrapper>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Right Column: Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col gap-4"
      >
        <h3 className="text-xl font-bold mb-2">Send a Message</h3>
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-card/30 border border-border/50 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-muted-foreground"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-card/30 border border-border/50 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-muted-foreground"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full bg-card/30 border border-border/50 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all placeholder:text-muted-foreground resize-none"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-400 hover:to-blue-400 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2"
          >
            Send Message <Send size={16} />
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);

export default Contact;
