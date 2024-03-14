import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
const additionalClasses = "text-[#050505]";
0;

const bodyClasses = `${inter.className} ${additionalClasses}`;
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyClasses}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
