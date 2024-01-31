import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import HomeHeader from "../components/HomeHeader";
import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick Links",
  description: "Link-sharing app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeHeader />
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
