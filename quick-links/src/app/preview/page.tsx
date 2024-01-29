import styles from "../page.module.css";
import Link from "next/link";

export default function Profile() {
  // TODO: Retrieve profile data from database and display
  return (
    <main className={styles.main}>
      <Link href={"/links"}>Back to Editor</Link>
      <button>Share link</button>
      {/* profile img */}
      <h1>Name</h1>
      <p>email</p>
      <p>list of links</p>
    </main>
  );
}
