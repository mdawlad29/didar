import Layout from "@/components/Layouts/Layout";
import Message from "@/components/Message/Message";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import PageRender from "./PageRender";
import "./globals.css";
const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Didarul Islam",
    default: "Didarul Islam | Home",
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
        <PageRender>
          <Layout>{children}</Layout>
          <Message />
        </PageRender>
      </body>
    </html>
  );
}
