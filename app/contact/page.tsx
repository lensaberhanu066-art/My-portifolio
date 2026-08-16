"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import RevealOnScroll from "../../components/RevealOnScroll";
import SectionHeading from "../../components/SectionHeading";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function Contact() {
	const [sent, setSent] = useState(false);

	const socialLinks = [
		{
			platform: "GitHub",
			username: "lensaberhanu066-art",
			url: "https://github.com/lensaberhanu066-art",
			icon: <FaGithub />,
			color: "hover:text-gray-700 dark:hover:text-gray-200",
		},
		{
			platform: "Instagram",
			username: "ladyboss5430",
			url: "https://instagram.com/ladyboss5430",
			icon: <FaInstagram />,
			color: "hover:text-pink-500",
		},
		{
			platform: "LinkedIn",
			username: "lensa-berhanu-1857613a9",
			url: "https://linkedin.com/in/lensa-berhanu-1857613a9",
			icon: <FaLinkedin />,
			color: "hover:text-blue-600",
		},
		{
			platform: "Telegram",
			username: "@Yahweh56",
			url: "https://t.me/Yahweh56",
			icon: <FaTelegram />,
			color: "hover:text-blue-400",
		},
	];

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setSent(true);
	}

	return (
		<div className="mx-auto max-w-5xl px-6 py-16">
			<RevealOnScroll>
				<SectionHeading
					title="Contact"
					subtitle="Want to work together? Send me a message or connect via social media."
				/>
			</RevealOnScroll>

			<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
				<RevealOnScroll>
					<form className="card-interactive mt-8 p-6" onSubmit={handleSubmit}>
						{sent ? (
							<div className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-6 text-center">
								<p className="font-medium text-foreground">Message sent!</p>
								<p className="mt-1 text-sm text-muted">Thanks for reaching out — I&apos;ll get back to you soon.</p>
							</div>
						) : (
							<>
								<label className="block">
									<span className="text-sm text-foreground">Name</span>
									<input className="input-field" placeholder="Your name" required />
								</label>
								<label className="mt-4 block">
									<span className="text-sm text-foreground">Email</span>
									<input type="email" className="input-field" placeholder="you@example.com" required />
								</label>
								<label className="mt-4 block">
									<span className="text-sm text-foreground">Message</span>
									<textarea className="input-field" rows={5} placeholder="Hi..." required />
								</label>
								<button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
									Send Message
								</button>
							</>
						)}
					</form>
				</RevealOnScroll>

				<RevealOnScroll>
					<div className="mt-8 space-y-4">
						<h3 className="text-lg font-semibold text-foreground">Connect With Me</h3>
						<p className="text-sm text-muted">Or reach out directly through these platforms:</p>
						<div className="grid grid-cols-1 gap-3">
							{socialLinks.map((social) => (
								<Link
									key={social.platform}
									href={social.url}
									target="_blank"
									rel="noreferrer"
									className={`group card-interactive flex items-center gap-3 p-4 transition-all duration-300 hover:scale-105 ${social.color}`}
								>
									<span className="text-2xl">{social.icon}</span>
									<div className="flex-1">
										<p className="font-medium text-foreground transition-colors group-hover:text-primary">{social.platform}</p>
										<p className="text-sm text-muted transition-colors group-hover:text-accent">{social.username}</p>
									</div>
									<span className="text-lg transition-transform group-hover:translate-x-1">→</span>
								</Link>
							))}
						</div>
					</div>
				</RevealOnScroll>
			</div>
		</div>
	);
}
