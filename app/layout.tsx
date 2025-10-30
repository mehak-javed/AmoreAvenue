

import AOSInit from './components/AOSInit';
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Love Sitting",
  description: "A place of Love",
  icons: {
    icon: "/amorelogo.png",
  },
};

export default function RootLayout({
  children,
 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
        <AOSInit />
      </body>
    </html>
  );
}
