import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://carbsandcravings.in'),
  title: "Carbs & Cravings | Bengaluru Waitlist",
  description:
    "Join the Carbs & Cravings waitlist for fresh home-cooked meals from nearby cooks in Bengaluru.",
  openGraph: {
    title: "Carbs & Cravings | Bengaluru Waitlist",
    description: "Join the Carbs & Cravings waitlist for fresh home-cooked meals from nearby cooks in Bengaluru.",
    url: "https://carbsandcravings.in",
    siteName: "Carbs & Cravings",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Carbs & Cravings: Home-cooked lunch and dinner, from nearby kitchens",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carbs & Cravings | Bengaluru Waitlist",
    description: "Join the Carbs & Cravings waitlist for fresh home-cooked meals from nearby cooks in Bengaluru.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[var(--color-base)] font-[var(--font-body)] text-[var(--color-charcoal)]">
        {children}
      </body>
    </html>
  );
}
