import type React from "react";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";

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
			<body className="font-thinking-serif min-h-screen">
				{children}
				<Analytics />
			</body>
		</html>
	);
}
