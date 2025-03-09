import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Sheaker | Premium E-Commerce Experience",
  description:
    "Shop the best products with Sheaker, your ultimate e-commerce platform.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
