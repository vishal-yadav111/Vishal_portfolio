import { motion } from "framer-motion";
import { Briefcase, Smartphone } from "lucide-react";
import Layout from "../components/Layout";
import Section from "../components/Section";

const experiences = [
  {
    icon: Briefcase,
    role: "Software Developer Intern",
    company: "Dhakad Innovations Pvt. Ltd",
    period: "2024 – Present",
    projects: [
      {
        name: "Jivdani Hospital Website",
        points: [
          "Designed and developed scalable, responsive UI components for a hospital management website used by real patients and staff",
          "Integrated RESTful APIs for dynamic data rendering — appointment scheduling, patient records, and service catalogs",
          "Applied performance optimization techniques including lazy loading, memoization, and code splitting to reduce initial page load time significantly",
        ],
      },
      {
        name: "VocifyNextGen – Job Application Platform",
        points: [
          "Led the end-to-end development of a next-generation hiring platform with job postings, applications, and dashboards",
          "Built role-based access control and API-driven architecture designed for real-world scalability",
          "Owned the full product lifecycle: architecture planning, database modeling, frontend polish, and deployment",
          "Made deliberate decisions on API patterns, state management, and data structures based on scalability needs",
          "Continuously iterated based on testing and feedback, treating every sprint as a learning cycle",
        ],
      },
    ],
    generalPoints: [
      "Collaborated with a cross-functional team using Git/GitHub for version control, code reviews, and feature branching workflows",
      "Gained hands-on experience with production-grade development cycles — from requirement gathering to deployment and bug tracking",
    ],
  },
  {
    icon: Smartphone,
    role: "Beta Tester",
    company: "Nothing India",
    period: "2023 – Present",
    projects: [],
    generalPoints: [
      "Selected as an early beta tester for Nothing smartphones and IoT devices before public launch",
      "Tested pre-release software builds across Nothing Phone and ecosystem products, identifying bugs, performance issues, and UX friction points",
      "Provided structured, detailed feedback on OS features, connectivity protocols, and device interoperability",
      "Helped improve product quality and user experience for Nothing's growing Indian user base through consistent reporting",
      "Gained deep insight into product development cycles, QA workflows, and hardware-software integration from a consumer tech perspective",
    ],
  },
];

const Experience = () => {
  return (
    <Layout>
      <Section>
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real-world experience building software that ships — in teams and independently.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px gradient-bg opacity-20 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="md:pl-14 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1 w-4 h-4 rounded-full gradient-bg hidden md:block" />

                <div className="rounded-2xl border border-border bg-card p-8 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg gradient-bg">
                        <exp.icon size={18} className="text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg">{exp.role}</h3>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                      {exp.period}
                    </span>
                  </div>

                  {/* Project sub-sections */}
                  {exp.projects.map((project, pi) => (
                    <div key={pi} className="mb-6">
                      <h4 className="text-sm font-heading font-semibold text-primary mb-3">
                        ▸ {project.name}
                      </h4>
                      <ul className="space-y-2 ml-3">
                        {project.points.map((p, j) => (
                          <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* General points */}
                  {exp.generalPoints.length > 0 && (
                    <ul className="space-y-2">
                      {exp.generalPoints.map((p, j) => (
                        <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-bg flex-shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Experience;
