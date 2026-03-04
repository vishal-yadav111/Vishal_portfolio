import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Sparkles, Brain, Users, Camera, Briefcase, Rocket, Smartphone, FileText, Award, GraduationCap, Trophy, Mail, Phone, MessageCircle, Github, Linkedin, ArrowUpRight } from "lucide-react";
import Layout from "../components/Layout";
import Section from "../components/Section";

const stats = [
  { label: "Projects Built", value: "5+" },
  { label: "Tech Stacks", value: "6+" },
  { label: "Research Papers", value: "1" },
  { label: "Internships", value: "2+" },
];

const projects = [
  {
    web: "http://ai-application-zsql.vercel.app",
    icon: Brain,
    title: "Quick AI",
    subtitle: "SaaS Web Application",
    tags: ["React", "Node.js", "AI APIs", "Stripe", "PostgreSQL"],
    description:
      "A full-stack SaaS platform with AI capabilities, authentication, subscription payments, and multiple AI integrations.",
  },
  {
    web: "https://ivoicifynextgen.com/",
    icon: Users,
    title: "iVocifyNextGen",
    subtitle: "Job Application Platform",
    tags: ["Next.js", "TypeScript", "REST APIs", "MongoDB"],
    description:
      "A next-generation hiring platform streamlining the recruitment lifecycle — job posting to candidate management.",
  },
  {
    icon: Camera,
    title: "Face Recognition Attendance",
    subtitle: "ML + Hardware Integration",
    tags: ["Python", "OpenCV", "ML", "Raspberry Pi"],
    description:
      "An intelligent attendance system using facial recognition to automate check-in, published as a research paper.",
  },
];

const experiences = [
  {
    icon: Briefcase,
    role: "Software Developer Intern",
    company: "Dhakad Innovations Pvt. Ltd",
    period: "July 2025 – March 2026",
    points: [
      "Built the Jivdani Hospital Website — scalable, responsive UI with REST API integration",
      "Led development of VocifyNextGen — a full hiring platform with role-based access & API-driven architecture",
      "Applied performance optimizations: lazy loading, memoization, and code splitting",
      "Collaborated using Git/GitHub for version control, code reviews, and feature branching",
    ],
  },
  {
    icon: Smartphone,
    role: "Beta Tester",
    company: "Nothing India",
    period: "Jan 2025 – March 2026",
    points: [
      "Selected as an early beta tester for Nothing smartphones and IoT devices",
      "Tested pre-release software builds, identifying bugs and UX issues before public launch",
      "Provided detailed feedback on OS features, connectivity, and device ecosystem integration",
      "Contributed to improving product quality for Nothing's growing Indian user base",
    ],
  },
];

const achievements = [
  {
    icon: FileText,
    category: "Research",
    title: "AI-Based Attendance System",
    description: "Published research on facial recognition-based attendance using ML pipelines.",
  },
  {
    icon: Trophy,
    category: "Exhibition",
    title: "Technical Exhibition",
    description: "Showcased Face Recognition system at college exhibition with positive reviews.",
  },
  {
    icon: Award,
    category: "Certifications",
    title: "Technical Certifications",
    description: "Completed certifications across full stack, cloud, and AI/ML fundamentals.",
  },
  {
    icon: GraduationCap,
    category: "Recognition",
    title: "Academic Recognition",
    description: "Recognized for strong technical contributions in academic and community projects.",
  },
];

const contacts = [
  { icon: Mail, label: "Email", value: "vishalyadav936969@gmail.com", href: "mailto:vishalyadav936969@gmail.com" },
  { icon: Phone, label: "Mobile", value: "+91-9369692770", href: "tel:+919369692770" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91-9369692770", href: "https://wa.me/919369692770" },
  { icon: Github, label: "GitHub", value: "github.com/vishalyadav", href: "https://github.com/vishal-yadav111" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/vishalyadav", href: "https://www.linkedin.com/in/vishal-yadav-a456aa275/" },
  { icon: Linkedin, label: "Twitter", value: "Twitter/vishal yadav", href: "https://x.com/Yadav3Vishal" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 gradient-bg" />
              <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                Full Stack Developer
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6">
              I build software that{" "}
              <span className="gradient-text">solves real problems.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Hi, I'm Vishal Yadav — a full stack developer from India who crafts
              scalable web applications, SaaS products, and AI-powered tools with
              clean architecture and thoughtful design.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-medium transition-all hover:opacity-90 glow-pink-sm"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium transition-all hover:bg-secondary"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* Floating accents */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden lg:block"
          >
            <div className="absolute top-32 right-20 opacity-20">
              <Code2 size={120} className="text-primary" />
            </div>
            <div className="absolute top-60 right-48 opacity-10">
              <Sparkles size={60} className="text-accent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl bg-card border border-border text-center card-hover"
            >
              <div className="text-3xl font-heading font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Section>

      {/* Projects Preview */}
      <Section className="bg-card/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Real challenges, real solutions — built with care and shipped with purpose.
          </p>
        </div>
        

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border bg-background p-6 card-hover"
            >


              <a href={project.web} className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline mb-6"  target="_blank">
            View Project <ArrowRight size={14} />
          </a>
              <div className="p-3 rounded-xl gradient-bg w-fit mb-4">
                <project.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-1">{project.title}</h3>
              <p className="text-xs text-primary mb-3">{project.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
            View all projects <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* Experience Preview */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Real-world experience building software that ships.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 card-hover"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg gradient-bg">
                    <exp.icon size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.points.map((p, j) => (
                  <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/experience" className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
            View full experience <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* Achievements Preview */}
      <Section className="bg-card/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3">
            Research & <span className="gradient-text">Achievements</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-xl border border-border bg-background p-6 card-hover"
            >
              <div className="p-2 rounded-lg gradient-bg w-fit mb-3">
                <item.icon size={18} className="text-primary-foreground" />
              </div>
              <span className="text-xs text-primary font-medium uppercase tracking-wider">{item.category}</span>
              <h3 className="font-heading font-semibold text-sm mt-1 mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/research" className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
            View all achievements <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      {/* Contact Preview */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground">
            Ready to build something impactful together.
          </p>
        </div>

        <div className="max-w-xl mx-auto space-y-3">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card card-hover group"
            >
              <div className="p-2 rounded-lg gradient-bg">
                <c.icon size={18} className="text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</div>
                <div className="font-medium text-sm truncate">{c.value}</div>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
