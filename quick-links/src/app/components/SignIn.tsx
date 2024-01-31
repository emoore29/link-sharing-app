"use client";

import { signIn } from "next-auth/react";

interface LogInProps {
  providerName?: string;
  providerId?: string;
}

export default function LogIn({ providerName, providerId }: LogInProps) {
  return (
    <>
      {providerName ? (
        <button onClick={() => signIn(providerId, { callbackUrl: "/links" })}>
          Sign in with {providerName}
        </button>
      ) : (
        <button onClick={() => signIn(undefined, { callbackUrl: "/links" })}>
          Sign in
        </button>
      )}
    </>
  );
}
