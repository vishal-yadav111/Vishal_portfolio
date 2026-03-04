import { motion } from "framer-motion";
import { ExternalLink, Brain, Users, Camera,  } from "lucide-react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { L } from "vitest/dist/chunks/reporters.d.BFLkQcL6.js";
import { Link } from "react-router-dom";

const projects = [
  {
    web:"http://ai-application-zsql.vercel.app",
    icon: Brain,
    title: "Quick AI",
    subtitle: "SaaS Web Application",
    tags: ["React", "Node.js", "AI APIs", "Stripe", "PostgreSQL"],
    description:
      "A full-stack SaaS platform that puts AI capabilities in the hands of everyday users. Built with a complete authentication system, subscription-based payments via Stripe, and multiple AI integrations for content generation, summarization, and analysis.",
    highlights: [
      "Architected a modular full-stack system with clean separation between client, server, and AI service layers",
      "Implemented secure authentication with JWT tokens, refresh flows, and role-based access control",
      "Integrated payment processing with subscription management, usage tracking, and webhook handling",
      "Connected multiple AI APIs with intelligent prompt engineering and response caching for cost optimization",
      "Deployed on cloud infrastructure with CI/CD pipelines, monitoring, and performance optimizations that reduced load times by 40%",
    ],
  },
  {
    web:"https://ivoicifynextgen.com/",
    icon: Users,
    title: "VocifyNextGen",
    subtitle: "Job Application Platform",
    tags: ["Next.js", "TypeScript", "REST APIs", "MongoDB"],
    description:
      "A next-generation hiring platform designed to streamline the entire recruitment lifecycle — from job posting to candidate management. Built as a product with real-world scalability in mind.",
    highlights: [
      "Designed an end-to-end job application flow with role-based dashboards for recruiters and candidates",
      "Built a scalable API-driven architecture with proper data modeling for complex relationships between users, jobs, and applications",
      "Implemented real-time status tracking, notification systems, and advanced filtering for large datasets",
      "Created a modern, accessible UI with responsive layouts, skeleton loaders, and optimistic updates",
      "Planned and executed features iteratively using product thinking — prioritizing user needs over technical complexity",
    ],
  },
  {
    icon: Camera,
    title: "Face Recognition Attendance",
    subtitle: "ML + Hardware Integration",
    tags: ["Python", "OpenCV", "Machine Learning", "Raspberry Pi"],
    description:
      "An intelligent attendance system that uses facial recognition to automate the check-in process — eliminating manual roll calls and reducing errors. Published as a research paper.",
    highlights: [
      "Developed a facial recognition pipeline using OpenCV and custom-trained ML models with high accuracy rates",
      "Integrated hardware components (camera module, Raspberry Pi) with software for seamless real-time processing",
      "Automated attendance logging to a database with timestamp tracking, reporting, and admin dashboards",
      "Reduced manual attendance time by over 80% in a real classroom environment",
      "Published findings in an academic paper, presenting at project exhibitions with positive faculty and peer reviews",
    ],
  },
];

const Projects = () => {
  return (
    <Layout>
      <Section>
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Selected <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each project represents a real challenge I chose to solve — built with 
            care, shipped with purpose.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <a href={project.web} key={project.title} className="block" target="_blank">
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-border bg-card p-8 sm:p-10 card-hover"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl gradient-bg">
                  <project.icon size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold">{project.title}</h2>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <ul className="space-y-3">
                {project.highlights.map((h, j) => (
                  <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
            </a>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Projects;
