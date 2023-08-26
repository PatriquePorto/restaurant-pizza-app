import Notification from "@/components/Notification";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Favicon from '/public/favicon.ico';
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pizza Massimo Taste",
  description: "Best restaurant city",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
          <div className="overflow-x-hidden">        
              <Notification />
              <Navbar />
              {children}
              <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
