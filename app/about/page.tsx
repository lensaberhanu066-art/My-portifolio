import Image from "next/image";
import RevealOnScroll from "../../components/RevealOnScroll";
import SectionHeading from "../../components/SectionHeading";
import Skills from "../../components/Skills";
import { PROFILE_IMAGE } from "../../lib/constants";

export default function About() {
	const sections = [
		{
			title: "Who I am",
			content:
				"I'm Lensa, a developer who enjoys learning by building. I'm interested in understanding how technology works and turning ideas into useful, real-world projects.",
		},
		{
			title: "What I do",
			content:
				"My current focus is web development, especially building modern interfaces with JavaScript, TypeScript, and Next.js. I'm also exploring Python for backend development and learning how frontend and backend systems work together.",
		},
		{
			title: "My learning journey",
			content:
				"I don't want to only learn programming through tutorials. I learn by building projects, making mistakes, debugging them, and improving along the way. Right now, I'm strengthening my JavaScript fundamentals while developing my own projects with Next.js and exploring backend development.",
		},
		{
			title: "Where I'm going",
			content:
				"My long-term goal is to become a full-stack developer and eventually explore the intersection of software, AI, robotics, and embedded systems. I want to keep building, keep learning, and eventually create technology of my own.",
		},
	];

	const interests = [
		"⚛️ Next.js & React",
		"🟦 JavaScript & TypeScript",
		"🐍 Python & backend development",
		"🔌 Embedded systems & electronics",
		"🤖 AI & robotics",
		"🛠️ Building real-world projects",
		"🌱 Learning through experimentation",
	];

	return (
		<div className="mx-auto max-w-5xl px-6 py-16">
			{/* Header Section */}
			<RevealOnScroll>
				<div className="flex flex-col items-start gap-8 sm:flex-row">
					<div className="profile-ring shrink-0 animate-float">
						<div className="relative h-48 w-48 overflow-hidden rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg shadow-primary/20">
							<Image
								src={PROFILE_IMAGE}
								alt="Lensa Berhanu"
								fill
								className="object-cover"
								sizes="192px"
							/>
						</div>
					</div>
					<div className="flex-1">
						<h1 className="text-4xl font-bold text-foreground sm:text-5xl">About Me</h1>
						<p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
							I'm a developer passionate about learning through building. I focus on creating modern,
							functional web applications and exploring the intersection of software, hardware, and AI.
						</p>
						<div className="mt-6 flex gap-3">
							<div className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-2">
								<p className="text-sm font-semibold text-primary">👨‍💻 Full-Stack Learning</p>
							</div>
							<div className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-2">
								<p className="text-sm font-semibold text-accent">🚀 Building Projects</p>
							</div>
						</div>
					</div>
				</div>
			</RevealOnScroll>

			{/* About Sections */}
			<div className="mt-16 space-y-12">
				{sections.map((section, idx) => (
					<RevealOnScroll key={section.title} delay={idx * 50}>
						<div className="card-interactive p-6">
							<h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
							<p className="mt-4 leading-relaxed text-muted">{section.content}</p>
						</div>
					</RevealOnScroll>
				))}
			</div>

			{/* Currently Building */}
			<RevealOnScroll>
				<div className="mt-16 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8">
					<h2 className="text-2xl font-bold text-foreground">🚀 Currently Building</h2>
					<div className="mt-6">
						<h3 className="text-xl font-semibold text-primary">MindDock</h3>
						<p className="mt-2 leading-relaxed text-muted">
							A personal productivity and organization platform where I'm experimenting with diaries, tasks, ideas,
							authentication, local storage, and interactive dashboards.
						</p>
						<p className="mt-3 text-sm text-accent">
							I'm using MindDock not only as a project, but also as a way to understand how real applications are
							structured and built.
						</p>
					</div>
				</div>
			</RevealOnScroll>

			{/* Interests */}
			<RevealOnScroll>
				<section className="mt-16">
					<h2 className="text-2xl font-semibold text-foreground">What I'm Exploring</h2>
					<div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
						{interests.map((interest) => (
							<div
								key={interest}
								className="card-interactive group flex items-center gap-3 p-4 transition-all duration-300 hover:bg-primary/10"
							>
								<span className="text-2xl transition-transform group-hover:scale-125">{interest.charAt(0)}</span>
								<span className="font-medium text-foreground transition-colors group-hover:text-primary">
									{interest.slice(2)}
								</span>
							</div>
						))}
					</div>
				</section>
			</RevealOnScroll>

			{/* Skills Section */}
			<RevealOnScroll>
				<div className="mt-16">
					<Skills />
				</div>
			</RevealOnScroll>
		</div>
	);
}
