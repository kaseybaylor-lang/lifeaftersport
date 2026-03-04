import type { Metadata } from "next";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Life After Sport",
  description: "Empowering athletes to thrive beyond the game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${jakarta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
