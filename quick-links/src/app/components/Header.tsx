import { getServerSession } from "next-auth";
import Navigation from "./Navigation";
import Link from "next/link";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

export default async function Header() {
  const session = await getServerSession();

  return (
    <header>
      <h1>
        <Link href={"/"}>quicklinks</Link>
      </h1>
      <Navigation />
      {session ? <SignOut /> : <SignIn />}
    </header>
  );
}
