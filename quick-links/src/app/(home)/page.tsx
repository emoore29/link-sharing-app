import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignIn from "../components/SignIn";
import Link from "next/link";
import styles from "@/app/page.module.css";

export default async function Home() {
  const session = await getServerSession();

  session && redirect("/links");

  return (
    <main className={styles.main}>
      {session ? (
        <>
          <h2>
            Signed in as {session.user?.email}. Redirecting you to links
            dashboard...
          </h2>
        </>
      ) : (
        <>
          <h2>Welcome to Quick Links!</h2>
          <p>
            Easily share links. Click sign in to be redirected to the
            signin/create an account page.
          </p>
        </>
      )}
    </main>
  );
}
