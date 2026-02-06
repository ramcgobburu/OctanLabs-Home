import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/components/providers/ReactQueryProvider";
import { ClientProviders } from "@/components/providers/ClientProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OctanLabs - AI-Powered Business Consulting",
  description: "Transform your business with expert AI insights, tailored strategies, and unwavering support designed to drive real growth.",
  keywords: ["AI consulting", "business optimization", "data analytics", "automation", "OctanLabs"],
  authors: [{ name: "OctanLabs" }],
  openGraph: {
    title: "OctanLabs - AI-Powered Business Consulting",
    description: "Transform your business with expert AI insights, tailored strategies, and unwavering support designed to drive real growth.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OctanLabs - AI-Powered Business Consulting",
    description: "Transform your business with expert AI insights, tailored strategies, and unwavering support designed to drive real growth.",
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
        <meta name="theme-color" content="#1E3A5F" />
      </head>
      <body className={inter.className}>
        <ReactQueryProvider>
          <ClientProviders>
            {children}
          </ClientProviders>
        </ReactQueryProvider>
      </body>
    </html>
  );
}