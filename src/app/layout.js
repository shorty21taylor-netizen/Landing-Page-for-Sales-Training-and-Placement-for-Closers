import "./globals.css";

export const metadata = {
  title: "Summit Closing Group — Become An Elite Remote Closer In 90 Days",
  description:
    "Get trained by 7-figure closers, placed into vetted high-ticket offers, and paid commission from day one. Apply to the elite closer program.",
  metadataBase: new URL("https://summitclosing.group"),
  openGraph: {
    title: "Summit Closing Group — Elite Closer Program",
    description:
      "Become an elite remote closer in 90 days. Training, placement, mentorship, and a community of operators.",
    type: "website",
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
