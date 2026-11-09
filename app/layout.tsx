import type React from "react";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-instrument-serif",
});

export const metadata = {
	title: "Valentin Radovich",
	description: "building stuff",
	generator: "v0.dev",
	metadataBase: new URL("https://valentinradovich.com"),
	icons: {
		icon: "/icon-vr.png",
	},
	openGraph: {
		title: "Valentin Radovich",
		description: "building stuff",
		siteName: "Valentin Radovich",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Valentin Radovich",
		description: "building stuff",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${instrumentSerif.variable} min-h-screen font-thinking-serif`}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
