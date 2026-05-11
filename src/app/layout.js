import "./globals.css";

export const metadata = {
  title:
    "Summit Closing Group — Build a 6-Figure Sales Career in 12 Months",
  description:
    "Get trained by 7-figure closers, placed into vetted high-ticket offers, and on a clear path to $100K+ in your first year. Apply to Summit Closing Group.",
  metadataBase: new URL("https://summitclosing.group"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Summit Closing Group — 6-Figure Sales Career in 12 Months",
    description:
      "Training, placement, and a 12-month path to $100K+. Guaranteed.",
    type: "website",
    images: [
      {
        url: "/scg-logo.png",
        width: 1536,
        height: 1024,
        alt: "Summit Closing Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Closing Group — 6-Figure Sales Career in 12 Months",
    description:
      "Training, placement, and a 12-month path to $100K+. Guaranteed.",
    images: ["/scg-logo.png"],
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="bg-black text-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
