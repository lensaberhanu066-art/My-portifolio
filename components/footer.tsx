import Link from "next/link";

const socials = [
	{ label: "GitHub", href: "https://github.com" },
	{ label: "LinkedIn", href: "https://linkedin.com" },
	{ label: "Email", href: "mailto:hello@example.com" },
];

export default function Footer() {
	return (
		<footer className="mt-auto w-full border-t border-border bg-card/60">
			<div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<p className="font-medium text-foreground">Lensa Berhanu</p>
					<p className="mt-1 text-sm text-muted">© {new Date().getFullYear()} All rights reserved.</p>
				</div>
				<div className="flex flex-wrap gap-4 text-sm">
					{socials.map(({ label, href }) => (
						<Link
							key={label}
							href={href}
							className="text-muted transition-colors hover:text-accent"
							target={href.startsWith("mailto:") ? undefined : "_blank"}
							rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
						>
							{label}
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
}
