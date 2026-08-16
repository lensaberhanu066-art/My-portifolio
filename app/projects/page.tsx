import ProjectCard from "../../components/ProjectCard";
import RevealOnScroll from "../../components/RevealOnScroll";
import SectionHeading from "../../components/SectionHeading";

const projects = [
	{
		title: "MindDock",
		description: "A modern web app built with Next.js and TypeScript. A comprehensive platform for managing tasks, notes, and productivity with an intuitive interface.",
		tags: ["Next.js", "TypeScript", "React", "Productivity"],
		url: "https://github.com/lensaberhanu066-art/MindDock",
		github: "lensaberhanu066-art/MindDock",
		images: [
			"/images/Screenshot 2026-08-16 122659.png",
			"/images/Screenshot 2026-08-16 122854.png",
			"/images/Screenshot 2026-08-16 122932.png",
			"/images/Screenshot 2026-08-16 123007.png",
		],
	},
];

export default function Projects() {
	return (
		<div className="mx-auto max-w-5xl px-6 py-16">
			<RevealOnScroll>
				<SectionHeading title="Projects" subtitle="A selection of projects I'm working on." />
			</RevealOnScroll>
			<div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
				{projects.map((p, i) => (
					<RevealOnScroll key={p.title} delay={i * 80}>
						<ProjectCard title={p.title} description={p.description} tags={p.tags} url={p.url} images={p.images} />
					</RevealOnScroll>
				))}
			</div>
			<RevealOnScroll>
				<div className="mt-20">
					<SectionHeading title="Projects I've Worked On" subtitle="A selection of projects and case studies." />
				</div>
			</RevealOnScroll>
			<RevealOnScroll>
				<p className="text-muted text-center mt-8">
					Coming soon: More projects and case studies will be added as I continue to learn and grow as a developer. Stay tuned for updates!
				</p>
			</RevealOnScroll>
		</div>
	);
}
