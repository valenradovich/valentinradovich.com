import Link from "next/link";
import { Layout } from "@/components/layout";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
	// Only show published posts on homepage
	const _posts = getSortedPostsData(false).slice(0, 3);

	return (
		<Layout>
			<header className="mb-6 text-center">
				<h1 className="text-6xl font-normal leading-tight">
					Valentin Radovich
				</h1>
			</header>
			<div className="text-left">
				<p className="text-xl mb-4 leading-relaxed">
					doer, reckless, lean, obsessive guy that wants to win.
				</p>
				<p className="text-xl mb-4 leading-relaxed">
					engineer driven by craft, user experience, simplicity, and speed - building{" "}
					<Link
						href="https://apps.apple.com/us/app/melian-discover-unique-brands/id6738385324"
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:no-underline"
					>
						Melian
					</Link>
					.
				</p>
				<div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-lg opacity-70">
					<Link
						href="mailto:hi@valentinradovich.com"
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:no-underline"
					>
						email
					</Link>
					<Link href="/posts" className="underline hover:no-underline">
						posts
					</Link>
					<Link
						href="https://x.com/radovichvalen"
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:no-underline"
					>
						x
					</Link>
					<Link
						href="https://github.com/valenradovich"
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:no-underline"
					>
						github
					</Link>
				</div>
			</div>
		</Layout>
	);
}
