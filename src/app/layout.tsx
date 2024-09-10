import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "PetCare - Pet Daycare software",
	description: "Take care of people's pets responsibly with PetCare.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased text-sm text-zinc-900 bg-offwhite min-h-screen `}
			>
				<SessionProvider>
					{children}
					<Toaster position="top-right" />
				</SessionProvider>
			</body>
		</html>
	);
}
