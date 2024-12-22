import type { Metadata } from "next";
import { Mulish, Alegreya } from "next/font/google";
import "./globals.css";

/*const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});*/

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const mulish = Mulish({ subsets: ["latin"], variable: "--font-mulish" });
const alegreya = Alegreya({ subsets: ["latin"], variable: "--font-alegreya" });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} ${alegreya.variable}`}>
        {children}
      </body>
    </html>
  );
}
