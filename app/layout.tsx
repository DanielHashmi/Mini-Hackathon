import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Grid Layout",
  description: "This is a grid layout assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`font-sans text-white`} >
        {children}
      </body>
    </html>
  );
}
