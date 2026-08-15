"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
	{ href: "/projects", label: "Projects" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<header
			className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
				scrolled
					? "border-border bg-background/90 shadow-lg shadow-primary/5 backdrop-blur-md"
					: "border-transparent bg-transparent"
			}`}
		>
			<div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
				<Link
					href="/"
					className="text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
				>
					Leni<span className="text-primary">.</span>
				</Link>

				<nav className="hidden sm:block">
					<ul className="flex gap-1 text-sm">
						{links.map(({ href, label }) => {
							const active = pathname === href;
							return (
								<li key={href}>
									<Link
										href={href}
										className={`rounded-md px-3 py-2 transition-colors ${
											active
												? "bg-primary/10 text-accent"
												: "text-muted hover:bg-card hover:text-foreground"
										}`}
									>
										{label}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>

				<button
					type="button"
					className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent hover:text-foreground sm:hidden"
					onClick={() => setOpen((v) => !v)}
					aria-expanded={open}
					aria-label="Toggle menu"
				>
					<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						{open ? (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						) : (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						)}
					</svg>
				</button>
			</div>

			{open && (
				<nav className="border-t border-border bg-card/95 px-6 py-4 sm:hidden">
					<ul className="flex flex-col gap-1 text-sm">
						{links.map(({ href, label }) => {
							const active = pathname === href;
							return (
								<li key={href}>
									<Link
										href={href}
										className={`block rounded-md px-3 py-2 transition-colors ${
											active ? "bg-primary/10 text-accent" : "text-muted hover:text-foreground"
										}`}
									>
										{label}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			)}
		</header>
	);
}
