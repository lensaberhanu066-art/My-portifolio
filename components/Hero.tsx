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

		<div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-32 lg:py-40">
			<div className="flex flex-col-reverse items-center gap-12 sm:gap-16 sm:flex-row sm:items-center">
				<div className="flex-1 text-center sm:text-left animate-fade-up">
					<p className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-accent">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
							</span>
							Available for work
						</p>
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
						Hi, I&apos;m{" "}
						<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
							Lensa
						</span>
					</h1>
					<p className="mt-6 sm:mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
						I'm a beginner developer passionate about building useful digital experiences and exploring embedded systems. I'm learning JavaScript, Next.js, and electronics while building projects like MindDock.
					</p>
					<div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
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
							<div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 overflow-hidden rounded-2xl border-2 border-border bg-card shadow-2xl shadow-primary/20">
								<Image
									src={PROFILE_IMAGE}
									alt="Lensa Berhanu"
									fill
									className="object-cover"
									priority
									sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
