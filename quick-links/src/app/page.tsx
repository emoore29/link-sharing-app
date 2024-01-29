import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  // Login page with option to create an account

  // Once logged in, users will be redirected to the Links page

  return (
    <main className={styles.main}>
      <h2>Login</h2>
      <p>Add your details below to get back into the app</p>
      <form action="">
        <label htmlFor="email">Email address</label>
        <input type="email" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <button>Login</button>
      </form>
      <p>Don't have an account?</p>
      <Link href={"/createaccount"}>Create account</Link>
    </main>
  );
}
