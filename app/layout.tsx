import type React from "react";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";

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
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="font-instrument-serif min-h-screen transition-colors duration-300">
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem={false}
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
