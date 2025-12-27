import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Analytics } from "@vercel/analytics/next"

// const roboto = Roboto_Condensed({
//   weight: '400',
//   subsets: ['latin'],
// })

 const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "FOD Hotels",
  description: "Your ultimate travel partner for curated trips, comfort, and unforgettable memories. Explore the world with FOD Hotels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistSans.variable} antialiased`}
      >
        <Analytics/>
        <Header/>
        <div className="pt-16">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
