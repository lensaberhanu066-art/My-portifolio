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
			className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${scrolled
				? "border-border/50 bg-background/95 shadow-2xl shadow-primary/10 backdrop-blur-xl"
				: "border-transparent bg-transparent"
			}`}
		>
			<div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
				<Link
					href="/"
					className="text-lg sm:text-xl font-bold tracking-tight text-foreground transition-all duration-300 hover:text-primary hover:scale-110"
				>
					Lensa<span className="text-primary animate-pulse">.</span>
				</Link>

				<nav className="hidden sm:block">
					<ul className="flex gap-1 text-sm">
						{links.map(({ href, label }) => {
							const active = pathname === href;
							return (
								<li key={href}>
									<Link
										href={href}
										className={`font-semibold rounded-lg px-3 py-2 transition-all duration-300 ${
											active
												? "bg-primary/20 text-accent shadow-lg shadow-primary/20"
												: "text-muted hover:bg-primary/10 hover:text-foreground hover:shadow-md hover:shadow-primary/10"
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
					className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-border text-muted transition-all duration-300 hover:border-primary hover:text-foreground hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 sm:hidden"
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
				<nav className="border-t border-border/50 bg-card/95 backdrop-blur-md px-4 sm:px-6 py-4 sm:hidden">
					<ul className="flex flex-col gap-2 text-sm">
						{links.map(({ href, label }) => {
							const active = pathname === href;
							return (
								<li key={href}>
									<Link
										href={href}
										className={`block rounded-lg px-3 py-2 font-medium transition-all duration-300 ${
											active ? "bg-primary/20 text-accent shadow-md shadow-primary/20" : "text-muted hover:bg-primary/10 hover:text-foreground hover:shadow-md hover:shadow-primary/10"
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
