import type { Metadata } from "next";
import "./globals.css";
import { Inter, DM_Serif_Display } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dm = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-dm-serif" });
export const metadata: Metadata = {
  title: "Azure Training Provider",
  description: "Master Microsoft Azure — Learn by Building",
  openGraph: { title: "Azure Training Provider", description: "Weekend cohorts • Hands-on labs • Certification prep", images: ["/opengraph.png"] },
  twitter: { card: "summary_large_image", title: "Azure Training Provider", description: "Weekend cohorts • Hands-on labs • Certification prep", images: ["/twitter.png"] }
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${dm.variable} min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100`}>
        {children}
      </body>
    </html>
  );
}