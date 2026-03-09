import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Bako CMS",
  description: "Bako CMS",
  keywords: ["Bako CMS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
