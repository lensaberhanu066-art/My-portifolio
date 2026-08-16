import Link from "next/link";
import {FaGithub, FaInstagram, FaLinkedin, FaTelegram} from "react-icons/fa";

const socials = [
	{
		label: "GitHub",
		href: "https://github.com/lensaberhanu066-art",
		icon: <FaGithub />,
		color: "hover:text-gray-700 dark:hover:text-gray-200",
	},
	{
		label: "Telegram",
		href: "https://t.me/Yahweh56",
		icon: <FaTelegram />,
		color: "hover:text-blue-400",
	},
	{
		label: "Instagram",
		href: "https://instagram.com/ladyboss5430",
		icon: <FaInstagram />,
		color: "hover:text-pink-500",
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com/in/lensa-berhanu-1857613a9",
		icon: <FaLinkedin />,
		color: "hover:text-blue-600",
	},
];

export default function Footer() {
	return (
		<footer className="mt-auto w-full border-t border-border/30 bg-gradient-to-t from-card/60 to-background/80 backdrop-blur-xl">
			<div className="mx-auto flex max-w-5xl flex-col gap-8 sm:gap-10 px-4 sm:px-6 py-12 sm:py-16">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
					<div>
						<p className="font-bold text-lg text-foreground">Lensa Berhanu</p>
						<p className="mt-2 text-sm text-muted">© {new Date().getFullYear()} All rights reserved.</p>
					</div>
					<div className="flex flex-wrap gap-6 sm:gap-8">
						{socials.map(({ label, href, icon, color }) => (
							<Link
								key={label}
								href={href}
								target="_blank"
								rel="noreferrer"
								className={`group flex items-center gap-3 font-medium text-muted transition-all duration-300 hover:scale-110 ${color}`}
								title={label}
							>
								<span className="text-2xl sm:text-3xl transition-transform group-hover:rotate-12 group-hover:scale-125">{icon}</span>
								<span className="hidden sm:inline text-sm font-semibold">{label}</span>
							</Link>
						))}
					</div>
				</div>
				<div className="border-t border-border/30 pt-8 sm:pt-10">
					<p className="text-center text-xs sm:text-sm text-muted/70">
						Designed & built with <span className="text-primary">❤️</span> using Next.js, React, and Tailwind CSS
					</p>
				</div>
			</div>
		</footer>
	);
}
						