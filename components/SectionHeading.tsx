type Props = {
	title: string;
	subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: Props) {
	return (
		<div className="section-heading">
			<h2 className="text-2xl font-semibold text-foreground">{title}</h2>
			{subtitle && <p className="mt-2 text-sm text-muted">{subtitle}</p>}
		</div>
	);
}
