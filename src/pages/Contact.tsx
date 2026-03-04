import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Github, Linkedin, ArrowUpRight, TwitterIcon, X, XIcon } from "lucide-react";
import Layout from "../components/Layout";
import Section from "../components/Section";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "vishalyadav936969@gmail.com",
    href: "mailto:vishalyadav936969@gmail.com",
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+91-9369692770",
    href: "tel:+919369692770",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91-9369692770",
    href: "https://wa.me/919369692770",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/vishalyadav",
    href: "https://github.com/vishal-yadav111",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/vishalyadav",
    href: "https://www.linkedin.com/in/vishal-yadav-a456aa275/",
  },
  {
    icon: XIcon,
    label: "Twitter",
    value: "twitter.com/vishalyadav",
    href: "https://x.com/Yadav3Vishal",
  },
];

const Contact = () => {
  return (
    <Layout>
      <Section>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm always open to conversations about new projects, collaboration 
            opportunities, or simply talking tech. Let's build something impactful 
            together.
          </p>
        </div>

        <div className="max-w-xl mx-auto space-y-4">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card card-hover group"
            >
              <div className="p-2.5 rounded-lg gradient-bg">
                <c.icon size={20} className="text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                  {c.label}
                </div>
                <div className="font-medium truncate">{c.value}</div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
              />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="inline-block px-8 py-4 rounded-2xl border border-border bg-card">
            <p className="text-lg font-heading font-semibold gradient-text">
              "Let's build something impactful together."
            </p>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default Contact;
