import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Layouts from "@/components/layouts/Layouts";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: "arnawadigital",
  appleWebApp: {
    title: "arnawadigital",
    capable: true,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://arnawadigital.com",
  ),
  description: "",
  keywords: "",
  creator: "",
  authors: {
    name: "",
    url: "",
  },
  openGraph: {
    images: "",
    url: "",
    siteName: "",
    locale: "",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.className} antialiased`}
        suppressHydrationWarning
      >
        <Layouts>{children}</Layouts>
      </body>
    </html>
  );
}
