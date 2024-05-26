import { Inter } from "next/font/google";
import "./globals.css";
import icon from "./icon.png"
import apple_icon from "./apple-icon.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akila Srikantha",
  description: "Personal Portfolio",
  icons: {
    icon: icon,
    apple: apple_icon,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
