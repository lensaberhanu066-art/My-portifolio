type Props = {
	title: string;
	description: string;
	tags?: string[];
	url?: string;
};

export default function ProjectCard({ title, description, tags = [], url }: Props) {
	return (
		<article className="card-interactive group flex h-full flex-col p-5">
			<div className="mb-3 flex items-start justify-between gap-3">
				<h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
					{title}
				</h3>
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
				<a
					className="mt-4 inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-accent"
					href={url}
					target="_blank"
					rel="noreferrer"
				>
					View project
					<span className="transition-transform group-hover:translate-x-1">→</span>
				</a>
			)}
		</article>
	);
}
