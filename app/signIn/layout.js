export const metadata = {
  title: "Officiel Campaign",
  description: "Generated by Next.js",
};
import { Toaster } from "sonner";
import "../globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  );
}
