import Image from "next/image";
import RevealOnScroll from "../../components/RevealOnScroll";
import SectionHeading from "../../components/SectionHeading";
import { PROFILE_IMAGE } from "../../lib/constants";

const experience = [
	{ role: "Front-end Developer", company: "Acme Co", period: "2022 — Present" },
	{ role: "UI Engineer", company: "Example Studio", period: "2020 — 2022" },
];

export default function About() {
	return (
		<div className="mx-auto max-w-5xl px-6 py-16">
			<RevealOnScroll>
				<div className="flex flex-col items-start gap-10 sm:flex-row">
					<div className="profile-ring shrink-0 animate-float">
						<div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-border bg-card">
							<Image
								src={PROFILE_IMAGE}
								alt="Lensa Berhanu"
								fill
								className="object-cover"
								sizes="176px"
							/>
						</div>
					</div>
					<div>
						<h1 className="text-3xl font-bold text-foreground sm:text-4xl">About Me</h1>
						<p className="mt-4 max-w-2xl leading-relaxed text-muted">
							I&apos;m a passionate developer focused on building modern web applications.
							I enjoy working on UI, performance, and accessibility. When I&apos;m not
							coding I love photography and hiking.
						</p>
					</div>
				</div>
			</RevealOnScroll>

			<RevealOnScroll>
				<section className="mt-16">
					<SectionHeading title="Experience" />
					<ul className="mt-8 space-y-4">
						{experience.map((item) => (
							<li
								key={item.role}
								className="card-interactive flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between"
							>
								<div>
									<p className="font-medium text-foreground">{item.role}</p>
									<p className="text-sm text-muted">{item.company}</p>
								</div>
								<span className="text-sm text-accent">{item.period}</span>
							</li>
						))}
					</ul>
				</section>
			</RevealOnScroll>
		</div>
	);
}
