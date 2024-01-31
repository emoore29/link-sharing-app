import { Inter } from "next/font/google";
import "@/app/globals.css";
import { getServerSession } from "next-auth";
import DashboardHeader from "../components/DashboardHeader";
import SessionProvider from "../components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html>
      <body>
        <section>
          <DashboardHeader />
          <SessionProvider session={session}>{children}</SessionProvider>
        </section>
      </body>
    </html>
  );
}
