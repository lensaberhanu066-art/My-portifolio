import ProjectCard from "../../components/ProjectCard";
import RevealOnScroll from "../../components/RevealOnScroll";
import SectionHeading from "../../components/SectionHeading";

const projects = [
	{
		title: "Project Alpha",
		description: "A modern web app built with Next.js and TypeScript.",
		tags: ["Next.js", "TypeScript"],
		url: "#",
	},
	{
		title: "Project Beta",
		description: "Design-focused marketing site with great UX.",
		tags: ["React", "Tailwind"],
		url: "#",
	},
	{
		title: "Project Gamma",
		description: "Automation tooling and developer utilities.",
		tags: ["Node", "CLI"],
		url: "#",
	},
];

export default function Projects() {
	return (
		<div className="mx-auto max-w-5xl px-6 py-16">
			<RevealOnScroll>
				<SectionHeading title="Projects" subtitle="A selection of projects I've worked on." />
			</RevealOnScroll>
			<div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
				{projects.map((p, i) => (
					<RevealOnScroll key={p.title} delay={i * 80}>
						<ProjectCard title={p.title} description={p.description} tags={p.tags} url={p.url} />
					</RevealOnScroll>
				))}
			</div>
		</div>
	);
}
