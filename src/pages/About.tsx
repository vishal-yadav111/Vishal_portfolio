import { motion } from "framer-motion";
import { Heart, Lightbulb, Target, Zap, Mountain, Trees } from "lucide-react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import vishalPhoto from "@/assets/vishal-photo.jpeg";
import vishalMountains from "@/assets/vishal-mountains.jpeg";

const values = [
  {
    icon: Lightbulb,
    title: "Curiosity-Driven",
    text: "I learn by diving deep — not just skimming docs, but understanding how things actually work under the hood.",
  },
  {
    icon: Target,
    title: "Product Mindset",
    text: "Every line of code serves a user. I think about the problem before the pattern, and the experience before the feature.",
  },
  {
    icon: Zap,
    title: "Performance First",
    text: "Clean code isn't optional — it's how I think. Lazy loading, memoization, and smart architecture are second nature.",
  },
  {
    icon: Heart,
    title: "Long-Term Builder",
    text: "I'm not chasing trends. I'm building a career around craft, depth, and consistent growth as an engineer.",
  },
];

const About = () => {
  return (
    <Layout>
      <Section>
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl gradient-bg p-[3px] animate-pulse-glow">
                <img
                  src={vishalPhoto}
                  alt="Vishal Yadav"
                  className="w-full h-full rounded-2xl object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 px-4 py-2 rounded-lg gradient-bg text-primary-foreground text-sm font-medium">
                Full Stack Dev
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-2">
                About <span className="gradient-text">Me</span>
              </h1>
              <div className="h-1 w-16 gradient-bg rounded-full" />
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-medium">Vishal Yadav</span> — a full stack developer based in India 
              with a genuine obsession for building things that work beautifully. My journey into software didn't start with 
              a bootcamp or a trending thread. It started with plain curiosity — wanting to understand how the apps I used 
              every day actually worked beneath the surface.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              That curiosity hasn't faded. Today, I build complete web applications from the ground up — from database schemas 
              and API design to responsive interfaces and deployment pipelines. I gravitate toward projects that combine 
              <span className="text-foreground font-medium"> technical depth with real-world impact</span>: SaaS platforms, 
              AI-powered tools, and systems that automate tedious workflows.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              What sets me apart isn't just the stack I use — it's 
              <span className="text-foreground font-medium"> how I think about problems</span>. Clean architecture matters 
              because it compounds. Readable code today means fewer bugs tomorrow. Thoughtful UX means users don't need a tutorial. 
              I don't write code to impress — I write code that lasts.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Beyond code, I'm deeply interested in <span className="text-foreground font-medium">AI and automation</span> — not 
              as buzzwords, but as tools that genuinely expand what a small team or a solo developer can accomplish. I've published 
              research in AI-based systems and actively explore how machine learning integrates into everyday software.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I see software engineering as a long game. I'm not here for shortcuts or surface-level expertise. I'm here to build, 
              learn, and create software that people actually rely on.
            </p>
          </div>
        </div>
      </Section>

      {/* Beyond Code */}
      <Section className="bg-card/50">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="text-primary" size={22} />
              <Trees className="text-accent" size={22} />
              <h2 className="text-3xl font-heading font-bold">
                Beyond the <span className="gradient-text">Code</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              When I'm not coding, you'll find me somewhere in the mountains or deep inside a forest trail. 
              I love trekking — it's where I recharge, think clearly, and come back with a fresh perspective.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-xl border border-border bg-background">
                <span className="mt-0.5 text-primary font-heading font-bold text-lg">⛰️</span>
                <div>
                  <p className="font-heading font-semibold text-sm">Chandrashila Peak</p>
                  <p className="text-xs text-muted-foreground">Summit at 13,000 ft altitude — one of my proudest treks</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl border border-border bg-background">
                <span className="mt-0.5 text-primary font-heading font-bold text-lg">🙏</span>
                <div>
                  <p className="font-heading font-semibold text-sm">Vaishno Devi</p>
                  <p className="text-xs text-muted-foreground">Completed the 35 km trek through the mountains</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl border border-border bg-background">
                <span className="mt-0.5 text-primary font-heading font-bold text-lg">🌲</span>
                <div>
                  <p className="font-heading font-semibold text-sm">More Adventures</p>
                  <p className="text-xs text-muted-foreground">Always planning the next trek — forests, valleys, and high-altitude trails</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="rounded-2xl gradient-bg p-[3px] max-w-sm w-full">
              <img
                src={vishalMountains}
                alt="Vishal Yadav trekking in the mountains"
                className="w-full h-80 sm:h-96 rounded-2xl object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <h2 className="text-3xl font-heading font-bold mb-10 text-center">
          How I <span className="gradient-text">Think</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl border border-border bg-card card-hover"
            >
              <v.icon className="text-primary mb-3" size={24} />
              <h3 className="font-heading font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default About;
