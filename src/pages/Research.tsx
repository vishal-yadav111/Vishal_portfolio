import { motion } from "framer-motion";
import { FileText, Award, GraduationCap, Trophy } from "lucide-react";
import Layout from "../components/Layout";
import Section from "../components/Section";

const items = [
  {
    icon: FileText,
    category: "Research Publication",
    title: "AI-Based Attendance System Using Face Recognition",
    description:
      "Published a research paper exploring the design, implementation, and real-world testing of a facial recognition-based attendance system. The paper covers the machine learning pipeline, accuracy benchmarks, and practical deployment challenges in educational environments.",
  },
  {
    icon: Trophy,
    category: "Project Exhibition",
    title: "Presented at College Technical Exhibition",
    description:
      "Showcased the Face Recognition Attendance System at the college's annual project exhibition. Received positive feedback from faculty, industry judges, and peers for both the technical depth and practical applicability of the solution.",
  },
  {
    icon: Award,
    category: "Certifications",
    title: "Technical Certifications & Bootcamps",
    description:
      "Completed multiple certifications and intensive bootcamps across full stack development, cloud technologies, and AI/ML fundamentals — continuously investing in structured learning alongside real-world building.",
  },
  {
    icon: GraduationCap,
    category: "Technical Recognition",
    title: "Academic & Community Recognition",
    description:
      "Recognized for strong technical contributions in academic projects, hackathons, and collaborative development work. Consistently sought out by peers for code reviews, debugging, and architecture guidance.",
  },
];

const Research = () => {
  return (
    <Layout>
      <Section>
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Research & <span className="gradient-text">Achievements</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Beyond code — publications, recognitions, and continuous learning milestones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border bg-card p-8 card-hover group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl gradient-bg transition-transform group-hover:scale-110">
                  <item.icon size={20} className="text-primary-foreground" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {item.category}
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Research;
