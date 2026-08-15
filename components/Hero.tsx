"use client";

import Image from "next/image";
import Link from "next/link";
import { PROFILE_IMAGE } from "../lib/constants";

export default function Hero() {
	return (
		<section className="relative w-full overflow-hidden">
			<div className="pointer-events-none absolute inset-0">
				<div className="hero-glow hero-glow-1" />
				<div className="hero-glow hero-glow-2" />
			</div>

			<div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
				<div className="flex flex-col-reverse items-center gap-12 sm:flex-row sm:items-center">
					<div className="flex-1 text-center sm:text-left animate-fade-up">
						<p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium text-accent">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
							</span>
							Available for work
						</p>
						<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
							Hi, I&apos;m{" "}
							<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
								Lensa Berhanu
							</span>
						</h1>
						<p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
							Front-end developer crafting accessible, performant web applications
							with clean UI and delightful user experiences.
						</p>
						<div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
							<Link href="/projects" className="btn-primary group">
								View Projects
								<span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
									→
								</span>
							</Link>
							<Link href="/contact" className="btn-secondary">
								Contact Me
							</Link>
						</div>
					</div>

					<div className="animate-fade-up shrink-0 [animation-delay:150ms]">
						<div className="profile-ring animate-float">
							<div className="relative h-52 w-52 overflow-hidden rounded-2xl border border-border bg-card sm:h-60 sm:w-60">
								<Image
									src={PROFILE_IMAGE}
									alt="Lensa Berhanu"
									fill
									className="object-cover"
									priority
									sizes="(max-width: 640px) 208px, 240px"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
