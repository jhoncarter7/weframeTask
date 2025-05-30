import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import { ReduxProvider } from "./store/ReduxProvider";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable}  antialiased`}>
        <ReduxProvider>
          
        <main className="md:grid md:grid-cols-10 md:grid-rows-10  font-urbanist md:pr-4">
          <div className=" col-span-2 row-span-10">
            <Sidebar />
          </div>
          <div className=" md:col-span-8 md:col-start-3  top-0 sticky z-20 pb-6" >
            <Navbar />
          </div>

          <div className="md:col-span-8 md:row-span-9 md:col-start-3 md:row-start-2 ">{children}</div>
        </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
