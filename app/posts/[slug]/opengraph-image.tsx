import { ImageResponse } from "next/og";
import { getPostData } from "@/lib/posts";

export const runtime = "nodejs";

export const alt = "Blog Post";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
	const post = await getPostData(params.slug);
	const title = post?.title || "Blog Post";

	const instrumentSerif = await fetch(
		"https://fonts.gstatic.com/s/instrumentserif/v5/jizBRFtNs2ka5fXjeivQ4LroWlx-2zI.ttf"
	).then((res) => res.arrayBuffer());

	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#E9E3DA",
					padding: 60,
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						textAlign: "center",
					}}
				>
					<h1
						style={{
							fontSize: title.length > 40 ? 48 : 60,
							fontWeight: 400,
							color: "#000000",
							letterSpacing: "-0.02em",
							marginBottom: 32,
							fontFamily: "Instrument Serif",
							lineHeight: 1.2,
							maxWidth: 1000,
						}}
					>
						{title}
					</h1>
					<p
						style={{
							fontSize: 24,
							color: "#666666",
							fontFamily: "Instrument Serif",
						}}
					>
						Valentin Radovich
					</p>
				</div>
			</div>
		),
		{
			...size,
			fonts: [
				{
					name: "Instrument Serif",
					data: instrumentSerif,
					style: "normal",
					weight: 400,
				},
			],
		}
	);
}
