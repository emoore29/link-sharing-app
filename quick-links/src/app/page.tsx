import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { signIn, signOut } from "next-auth/react";
import SignOut from "./components/SignOut";
import SignIn from "./components/SignIn";
import { redirect } from "next/navigation";

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
            Easily share links. To create a profile, sign in or create an
            account:
          </p>
          <SignIn />
        </>
      )}
    </main>
  );
}
