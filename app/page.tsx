import Hero from "../components/Hero";
import Skills from "../components/Skills";
import ProjectCard from "../components/ProjectCard";
import RevealOnScroll from "../components/RevealOnScroll";
import SectionHeading from "../components/SectionHeading";
import Link from "next/link";

const projects = [
  {
    title: "MindDock",
    description: "A modern web app built with Next.js and TypeScript.",
    tags: ["Next.js", "TypeScript"],
  },
 
];

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <RevealOnScroll>
        <section className="mx-auto max-w-5xl px-6 py-16">
          <SectionHeading title="Selected Projects" subtitle="Recent work I'm proud of" />
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {projects.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 100}>
                <ProjectCard title={p.title} description={p.description} tags={p.tags} />
              </RevealOnScroll>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/projects" className="group inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-accent">
              View all projects
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>
      </RevealOnScroll>
      <RevealOnScroll>
        <Skills />
      </RevealOnScroll>
    </div>
  );
}
