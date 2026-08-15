"use client";

import { FormEvent, useState } from "react";
import RevealOnScroll from "../../components/RevealOnScroll";
import SectionHeading from "../../components/SectionHeading";

export default function Contact() {
	const [sent, setSent] = useState(false);

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setSent(true);
	}

	return (
		<div className="mx-auto max-w-5xl px-6 py-16">
			<RevealOnScroll>
				<SectionHeading
					title="Contact"
					subtitle="Want to work together? Send me a message."
				/>
			</RevealOnScroll>

			<RevealOnScroll>
				<form className="card-interactive mt-8 max-w-xl p-6" onSubmit={handleSubmit}>
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
		</div>
	);
}
