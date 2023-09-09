import Notification from "@/components/Notification";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Favicon from '/public/favicon.ico';
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

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
        <QueryProvider>
          <div className="overflow-x-hidden">        
              <Notification />
              <Navbar />
              {children}
              <Footer />
              <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
          </div>
        </QueryProvider>
       </AuthProvider>
      </body>
    </html>
  );
}
