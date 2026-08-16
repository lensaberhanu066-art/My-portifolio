"use client";

import { useState } from "react";

const skills = [
	{ name: "HTML", level: 95 },
	{ name: "CSS", level: 95 },
	{ name: "JavaScript", level: 45 },
	{ name: "React", level: 20 },
	{ name: "Next.js", level: 15 },
	{ name: "TypeScript", level: 20 },
	{ name: "Tailwind CSS", level: 35},	
	{ name: "Python", level: 25 },
];

export default function Skills() {
	const [active, setActive] = useState<string | null>(null);

	return (
		<section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
			<div className="section-heading text-center sm:text-left">
				<h2 className="text-3xl sm:text-4xl font-bold text-foreground">Skills & Technologies</h2>
				<p className="mt-3 text-base text-muted">Click or hover to see proficiency level</p>
			</div>
			<div className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 lg:grid-cols-5">
				{skills.map((skill) => (
					<button
						key={skill.name}
						type="button"
						className="skill-pill group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card/80 to-card px-3 sm:px-4 py-4 sm:py-5 text-center text-xs sm:text-sm font-medium text-muted transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:text-foreground hover:shadow-2xl hover:shadow-primary/30 hover:bg-gradient-to-br hover:from-primary/15 hover:to-accent/10 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
						onMouseEnter={() => setActive(skill.name)}
						onMouseLeave={() => setActive(null)}
						onFocus={() => setActive(skill.name)}
						onBlur={() => setActive(null)}
						onTouchStart={() => setActive(skill.name)}
						onTouchEnd={() => setActive(null)}
					>
						<span className="relative z-10 font-semibold block">{skill.name}</span>
						{active === skill.name && (
							<span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-primary animate-pulse">
								{skill.level}%
							</span>
						)}
						<div
							className="absolute inset-x-0 bottom-0 h-1 sm:h-1.5 origin-left bg-gradient-to-r from-primary via-accent to-primary transition-transform duration-500 rounded-t-full"
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
