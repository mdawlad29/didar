import Footer from "@/components/partials/Footer";
import Navbar from "@/components/partials/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../scss/global.scss";
const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Mohammad Awlad",
    default: "Mohammad Awlad | Home",
  },
  description: "My personal portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
