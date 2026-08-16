"use client";

import { useState } from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type Props = {
	title: string;
	description: string;
	tags?: string[];
	url?: string;
	github?: string;
	images?: string[];
};

export default function ProjectCard({ title, description, tags = [], url, github, images = [] }: Props) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const nextImage = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentImageIndex((prev) => (prev + 1) % images.length);
	};

	const prevImage = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
	};

	return (
		<article className="card-interactive group flex h-full flex-col overflow-hidden p-0 transition-all duration-300 hover:shadow-2xl">
			{/* Image Gallery */}
			{images.length > 0 && (
				<div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 sm:h-56">
					<Image
						src={images[currentImageIndex]}
						alt={`${title} screenshot ${currentImageIndex + 1}`}
						fill
						className="object-cover transition-transform duration-300 group-hover:scale-110"
					/>

					{/* Navigation Buttons */}
					{images.length > 1 && (
						<>
							<button
								onClick={prevImage}
								className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-all duration-200 hover:bg-black/60 hover:scale-110 backdrop-blur-sm"
								aria-label="Previous image"
							>
								←
							</button>
							<button
								onClick={nextImage}
								className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-all duration-200 hover:bg-black/60 hover:scale-110 backdrop-blur-sm"
								aria-label="Next image"
							>
								→
							</button>

							{/* Indicators */}
							<div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
								{images.map((_, idx) => (
									<button
										key={idx}
										onClick={(e) => {
											e.preventDefault();
											e.stopPropagation();
											setCurrentImageIndex(idx);
										}}
										className={`h-2 rounded-full transition-all duration-300 ${
											idx === currentImageIndex ? "w-6 bg-primary" : "w-2 bg-white/50 hover:bg-white/70"
										}`}
										aria-label={`Go to image ${idx + 1}`}
									/>
								))}
							</div>
						</>
					)}
				</div>
			)}

			{/* Content */}
			<div className="flex flex-1 flex-col p-5">
				<div className="mb-3 flex items-start justify-between gap-3">
					<div className="flex-1">
						<h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
							{title}
						</h3>
						{github && (
							<p className="mt-1 text-xs text-muted/70 font-mono flex items-center gap-1">
								<FiGithub className="inline" size={12} />
								{github}
							</p>
						)}
					</div>
					<span className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary">
						↗
					</span>
				</div>
				<p className="flex-1 text-sm leading-relaxed text-muted">{description}</p>
				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((t) => (
						<span
							key={t}
							className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted transition-colors group-hover:border-primary/30 group-hover:text-foreground"
						>
							{t}
						</span>
					))}
				</div>
				{url && (
					<div className="mt-4 flex gap-3">
						<a
							className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-background hover:scale-105"
							href={url}
							target="_blank"
							rel="noreferrer"
						>
							<FiGithub size={16} />
							View on GitHub
							<FiExternalLink size={14} className="transition-transform group-hover:translate-x-0.5" />
						</a>
					</div>
				)}
			</div>
		</article>
	);
}
