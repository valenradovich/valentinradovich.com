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
				<p className="mb-4 text-[17px] leading-[1.6]">
					relentless. lean. obsessive.
				</p>
				<p className="mb-4 text-[17px] leading-[1.6]">
					engineer driven by craft, simplicity, speed, and user experience - making{" "}
					<Link
						href="https://melian.com"
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:no-underline"
					>
						something wonderful
					</Link>
					.
				</p>
				<p className="mb-4 text-[17px] leading-[1.6]">
					from argentina, living in san francisco.
				</p>
				<div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[17px] leading-[1.6] opacity-70">
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
					<Link
						href="https://melian.com"
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:no-underline"
					>
						melian
					</Link>
				</div>
			</div>
		</Layout>
	);
}
