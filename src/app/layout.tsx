import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Layouts from "@/components/layouts/Layouts";
import ThemeProviderContext from "@/components/elements/theme-provider";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: "Portfolio | Elsam Rafi Saputra",
  appleWebApp: {
    title: "Portfolio | Elsam Rafi Saputra",
    capable: true,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://elsamrafisptr.github.io/my-portfolio",
  ),
  description:
    "This is a portfolio by elsam rafi saputra, software engineer that specializing in software development and artificial intelligence.",
  keywords:
    "Elsam, Rafi, Saputra, Elsam Rafi Saputra, Software, Software Engineer, AI, Artificial Intelligence, Portfolio, Personal Website",
  creator: "Elsam Rafi Saputra",
  authors: {
    name: "Elsam Rafi Saputra",
    url: "https://github.com/elsamrafisptr/",
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
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistMono.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProviderContext>
          <Layouts>{children}</Layouts>
        </ThemeProviderContext>
      </body>
    </html>
  );
}
