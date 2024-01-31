"use client";

import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { signIn } from "next-auth/react";

export default async function SignIn() {
  const session = await getServerSession();

  if (session) {
    return { redirect: { destination: "/links" } };
  }

  const providers = await getProviders();

  return <div>Signin page.</div>;
}

// Hello world.
//       {Object.values(providers).map((provider) => (
//         <div key={provider.name}>
//           <button onClick={() => signIn(provider.id)}>
//             Sign in with {provider.name}
//           </button>
//         </div>
//       ))}
