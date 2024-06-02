import { Inter } from "next/font/google";
import "./globals.css";
import Image from 'next/image';
import appleIcon from '/public/apple-touch-icon.png';
import icon from '/public/icon.png';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akila Srikantha",
  description: "Personal Portfolio",
  icons: [
    {
      rel: 'icon',
      formats: 'image/png',
      sizes: '192x192',
      url: icon,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: appleIcon,
    },
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
