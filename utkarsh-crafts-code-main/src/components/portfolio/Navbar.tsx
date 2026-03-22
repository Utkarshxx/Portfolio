import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${
        scrolled ? "bg-background/90 backdrop-blur-md py-4 border-b border-border shadow-sm" : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="w-full max-w-5xl px-6 flex items-center justify-between md:justify-center">
        {/* Logo visible on mobile only to balance the layout */}
        <div className="md:hidden">
          <a href="#" className="text-xl font-bold text-violet-400 font-mono tracking-wider">
            UR.
          </a>
        </div>

        {/* Desktop Links (Centered) */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className="text-muted-foreground hover:text-white transition-colors font-medium text-[15.5px] tracking-wide relative group"
            >
              {l.label}
              <span className="h-[2px] w-0 bg-gradient-to-r from-violet-500 to-blue-500 absolute left-0 -bottom-1.5 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-foreground hover:text-violet-400 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 md:hidden bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col items-center gap-4 shadow-2xl overflow-hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-muted-foreground hover:text-violet-400 font-semibold text-lg w-full text-center py-3 transition-colors rounded-lg hover:bg-card/40"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
