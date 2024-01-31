import { getServerSession } from "next-auth";
import Navigation from "./Navigation";
import Link from "next/link";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import styles from "../css/header.module.css";
import Image from "next/image";

export default async function DashboardHeader() {
  const session = await getServerSession();

  console.log(session);

  return (
    <header className={styles.dashboardHeader}>
      <h1>quicklinks</h1>
      <Navigation />
      <button className={styles.userImg}>
        <Image fill src={session?.user?.image ?? ""} alt="Profile image" />
      </button>

      {session ? <SignOut /> : <SignIn />}
    </header>
  );
}
