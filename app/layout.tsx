import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Mini Hackathon Project",
  description: "This is a Hackathon assignment",
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
