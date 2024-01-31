import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import LogIn from "@/app/components/SignIn";
import styles from "@/app/css/login.module.css";

export default async function SignIn() {
  const session = await getServerSession();
  const providers = await getProviders();

  console.log("providers", providers);

  // if (session) {
  //   return { redirect: { destination: "/links" } };
  // }

  return (
    <div className={styles.loginBox}>
      <h1>quicklinks</h1>
      <h2>Sign in</h2>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <LogIn providerName={provider.name} providerId={provider.id} />
        </div>
      ))}
    </div>
  );
}
