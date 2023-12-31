import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="w-full max-w-screen-xl overflow-auto mx-auto">
        <header className="sticky top-0 bg-white z-10 border-b">
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
