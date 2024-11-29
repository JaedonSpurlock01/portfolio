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
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-neutral-950 bg-neutral-50`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="w-full relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
