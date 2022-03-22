import { Link } from "remix";
import { ButtonLinkType } from "~/types";

export default function ButtonLinks({ links }: { links: ButtonLinkType[] }) {
	return (
		<div className="links">
			{links.map((link, index) => (
				<ButtonLink {...link} key={index} />
			))}
		</div>
	);
}

export function ButtonLink({ name, url, className = "", download = false, primary = false }: ButtonLinkType) {
	if (/^https:\/\//.test(url)) {
		return download ? (
			<a
				href={url}
				download
				className={`button ${primary ? "button-primary" : ""} ${className}`}
				target="_blank"
				rel="noreferrer"
			>
				{name}
			</a>
		) : (
			<a
				href={url}
				className={`button ${primary ? "button-primary" : ""} ${className}`}
				target="_blank"
				rel="noreferrer"
			>
				{name}
			</a>
		);
	}

	return (
		<Link to={url} className={`button ${primary ? "button-primary" : ""} ${className}`}>
			{name}
		</Link>
	);
}
