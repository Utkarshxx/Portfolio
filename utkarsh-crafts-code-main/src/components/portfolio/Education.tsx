import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    badge: "Currently Pursuing",
    degree: "B.Tech in Computer Science Engineering",
    school: "Lovely Professional University",
    location: "Punjab, India",
    status: "CGPA: 7.4",
    align: "left",
  },
  {
    badge: "",
    degree: "Intermediate (12th)",
    school: "Ebenezer Hr.Sec. School",
    location: "Madhya Pradesh, India",
    status: "Completed",
    align: "right",
  },
  {
    badge: "",
    degree: "Matriculation (10th)",
    school: "No.1 Air Force School",
    location: "Gwalior, Madhya Pradesh, India",
    status: "Completed",
    align: "left",
  },
];

const Education = () => (
  <section id="education" className="section-container relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center mb-20"
    >
      <div className="flex flex-col items-center text-center">
        <p className="text-violet-400 font-mono text-sm mb-2">06. Education</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Academic Background</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
      </div>
    </motion.div>

    <div className="relative max-w-4xl mx-auto">
      {/* Vertical line - hidden on very small screens, placed left on mobile, center on md */}
      <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-cyan-900/40" />

      {education.map((item, index) => (
        <div
          key={index}
          className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 ${
            item.align === "left" ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Animated center dot */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="absolute left-[14px] md:left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 ring-4 ring-background z-10"
          />

          {/* Spacer for opposite side on desktop */}
          <div className="hidden md:block w-1/2" />

          {/* Card Wrapper */}
          <div
            className={`w-full md:w-1/2 pl-12 md:pl-0 ${
              item.align === "left" ? "md:pr-12" : "md:pl-12"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: item.align === "left" ? -30 : 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card/20 border border-border/50 rounded-2xl p-6 md:p-8 hover:bg-card/40 transition-colors shadow-lg"
            >
              <div
                className={`flex flex-col gap-3 ${
                  item.align === "left" ? "md:items-end md:text-right" : "items-start text-left"
                } items-start text-left`}
              >
                {item.badge && (
                  <span className="px-3 py-1 bg-blue-950/40 text-blue-400 text-xs font-semibold rounded-full mb-1 border border-blue-900/50">
                    {item.badge}
                  </span>
                )}
                
                <div
                  className={`flex items-start gap-3 ${
                    item.align === "left" ? "md:flex-row-reverse flex-row" : "flex-row"
                  }`}
                >
                  <GraduationCap
                    className="text-violet-400 shrink-0 mt-1"
                    size={24}
                  />
                  <h3 className="text-xl md:text-2xl font-bold leading-tight">
                    {item.degree}
                  </h3>
                </div>

                <p className="text-violet-400 font-semibold text-base">
                  {item.school}
                </p>

                <div
                  className={`flex items-center gap-1.5 text-muted-foreground text-sm font-medium ${
                    item.align === "left" ? "md:flex-row-reverse flex-row" : "flex-row"
                  }`}
                >
                  <MapPin size={14} className="shrink-0 text-muted-foreground" />
                  <span>{item.location}</span>
                </div>

                <p className="text-blue-400 font-medium text-sm mt-1">{item.status}</p>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
