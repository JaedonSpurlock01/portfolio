import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import "./globals.css";

import "mapbox-gl/dist/mapbox-gl.css";

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
  title: "Jaedon Spurlock",
  description: "Jaedon Spurlock's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-background bg-neutral-50`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-screen bg-[linear-gradient(to_right,#6f6f6f2e_1px,transparent_1px),linear-gradient(to_bottom,#6f6f6f2e_1px,transparent_1px)] bg-[size:25px_25px] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          <main className="w-full relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
