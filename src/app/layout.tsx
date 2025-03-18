import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eyyüp SERT | Yazılım Mühendisi",
  description: "Eyyüp SERT'in kişisel portfolyo sitesi. Java ve C# ile backend yazılım geliştirme, mikroservis mimarisi ve distributed sistemler alanlarında uzmanlaşmış yazılım mühendisi.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
      }
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      }
    ],
  },
  keywords: ["Eyyüp SERT", "Yazılım Mühendisi", "Java Developer", "C# Developer", "Backend Developer", "Mikroservisler", "Portfolio"],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://eyyupsert.com",
    title: "Eyyüp SERT | Yazılım Mühendisi",
    description: "Eyyüp SERT'in kişisel portfolyo sitesi. Java ve C# ile backend yazılım geliştirme, mikroservis mimarisi ve distributed sistemler alanlarında uzmanlaşmış yazılım mühendisi.",
    siteName: "Eyyüp SERT Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eyyüp SERT Portfolio",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eyyüp SERT | Yazılım Mühendisi",
    description: "Eyyüp SERT'in kişisel portfolyo sitesi. Java ve C# ile backend yazılım geliştirme, mikroservis mimarisi ve distributed sistemler alanlarında uzmanlaşmış yazılım mühendisi.",
    images: ["/og-image.jpg"],
  },
  authors: [{ name: "Eyyüp SERT" }],
  creator: "Eyyüp SERT",
  publisher: "Eyyüp SERT",
  applicationName: "Eyyüp SERT Portfolio",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://eyyupsert.com",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
