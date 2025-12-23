import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Valentin Radovich";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function Image() {
	const [instrumentSerif, instrumentSerifItalic] = await Promise.all([
		fetch(
			"https://fonts.gstatic.com/s/instrumentserif/v5/jizBRFtNs2ka5fXjeivQ4LroWlx-2zI.ttf"
		).then((res) => res.arrayBuffer()),
		fetch(
			"https://fonts.gstatic.com/s/instrumentserif/v5/jizHRFtNs2ka5fXjeivQ4LroWlx-6zATiw.ttf"
		).then((res) => res.arrayBuffer()),
	]);

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
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<h1
						style={{
							fontSize: 72,
							fontWeight: 400,
							color: "#000000",
							letterSpacing: "-0.02em",
							marginBottom: 16,
							fontFamily: "Instrument Serif",
						}}
					>
						Valentin Radovich
					</h1>
					<p
						style={{
							fontSize: 28,
							color: "#666666",
							fontFamily: "Instrument Serif",
							fontStyle: "italic",
						}}
					>
						building stuff
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
				{
					name: "Instrument Serif",
					data: instrumentSerifItalic,
					style: "italic",
					weight: 400,
				},
			],
		}
	);
}
