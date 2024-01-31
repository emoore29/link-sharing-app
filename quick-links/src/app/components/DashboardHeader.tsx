import { getServerSession } from "next-auth";
import Navigation from "./Navigation";
import Link from "next/link";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import styles from "../css/header.module.css";

export default async function DashboardHeader() {
  const session = await getServerSession();

  return (
    <header className={styles.dashboardHeader}>
      <h1>quicklinks</h1>
      <Navigation />
      {session ? <SignOut /> : <SignIn />}
    </header>
  );
}
