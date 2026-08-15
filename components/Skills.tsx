"use client";

import { useState } from "react";

const skills = [
	{ name: "React", level: 90 },
	{ name: "Next.js", level: 85 },
	{ name: "TypeScript", level: 80 },
	{ name: "Tailwind CSS", level: 90 },
	{ name: "Node.js", level: 75 },
	{ name: "GraphQL", level: 70 },
];

export default function Skills() {
	const [active, setActive] = useState<string | null>(null);

	return (
		<section className="mx-auto max-w-5xl px-6 py-16">
			<div className="section-heading">
				<h2 className="text-2xl font-semibold text-foreground">Skills</h2>
				<p className="mt-2 text-sm text-muted">Hover a skill to see proficiency</p>
			</div>
			<div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
				{skills.map((skill) => (
					<button
						key={skill.name}
						type="button"
						className="skill-pill group relative overflow-hidden rounded-xl border border-border bg-card px-3 py-4 text-center text-sm text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-foreground hover:shadow-lg hover:shadow-primary/10"
						onMouseEnter={() => setActive(skill.name)}
						onMouseLeave={() => setActive(null)}
						onFocus={() => setActive(skill.name)}
						onBlur={() => setActive(null)}
					>
						<span className="relative z-10 font-medium">{skill.name}</span>
						<div
							className="absolute inset-x-0 bottom-0 h-1 origin-left bg-gradient-to-r from-primary to-accent transition-transform duration-500"
							style={{
								transform: active === skill.name ? `scaleX(${skill.level / 100})` : "scaleX(0)",
							}}
						/>
					</button>
				))}
			</div>
		</section>
	);
}
