import { Inter } from "next/font/google";
import "@/app/globals.css";
const inter = Inter({ subsets: ["latin"] });
import styles from "@/app/css/login.module.css";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.login}`}>
        <h1>Sign In</h1>
        {children}
      </body>
    </html>
  );
}
