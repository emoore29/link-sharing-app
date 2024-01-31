import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { signIn, signOut } from "next-auth/react";
import SignOut from "./components/SignOut";
import SignIn from "./components/SignIn";

export default async function Home() {
  const session = await getServerSession();

  // When user is not logged in, display a home page describing the app and a link to the sign in page (where they can also create an account if they haven't already).
  // When the user signs in, check if they already have a User table in the database. If they don't, create one.
  // Email verification?
  // Once logged in successfully, redirect to the links/profile page.

  return (
    <main className={styles.main}>
      {session ? (
        <>
          <h2>
            Signed in as {session.user?.email} TODO: Add homepage for when user
            is signed in? Or simply redirect to links...
          </h2>
          <SignOut />
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
