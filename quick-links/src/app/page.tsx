import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>quicklinks</h1>
      <nav>
        <ul>
          <li>
            <Link href={"/links"}>links</Link>
          </li>
          <li>
            <Link href={"/profile"}>profile</Link>
          </li>
          <li>
            <Link href={"/preview"}>preview</Link>
          </li>
        </ul>
      </nav>
      <form action="">
        <button>add new link</button>
      </form>
    </main>
  );
}
