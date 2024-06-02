import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akila Srikantha",
  description: "Personal Portfolio",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/icon.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-icon.png',
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
