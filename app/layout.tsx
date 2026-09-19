import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diego Alas | Software Engineer & Web Designer",
  description:
    "Portfolio of Diego Alas. Specialized in modern web applications, Next.js, TypeScript, and Bento Grid design systems.",
  keywords: [
    "Diego Alas",
    "Portfolio",
    "Software Engineer",
    "Web Designer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Hogareño",
  ],
  authors: [{ name: "Diego Alas" }],
  creator: "Diego Alas",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('portfolio_theme');
                if (storedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else if (storedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-grid-pattern">
              {/* Top gradient glow */}
              <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none -z-10 blur-2xl" />
              
              <div className="flex-1">{children}</div>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
