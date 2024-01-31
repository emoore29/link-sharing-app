import { getServerSession } from "next-auth";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import styles from "../css/header.module.css";

export default async function HomeHeader() {
  const session = await getServerSession();

  return (
    <header className={styles.homeHeader}>
      <h1>quicklinks</h1>
      {session ? <SignOut /> : <SignIn />}
    </header>
  );
}
