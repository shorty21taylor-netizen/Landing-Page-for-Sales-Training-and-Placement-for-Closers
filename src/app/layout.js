import "./globals.css";

export const metadata = {
  title: "Summit Closing Group — Place Elite Closers In 14 Days",
  description:
    "Done-for-you sales talent placement and fractional sales management. Backed by a 90-day replacement guarantee.",
  metadataBase: new URL("https://summitclosing.group"),
  openGraph: {
    title: "Summit Closing Group",
    description:
      "Place elite closers in your business in 14 days. Sales coaching + closer placement.",
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
