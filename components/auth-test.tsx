"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { SignOutButton } from "./auth-buttons";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {JSON.stringify(session)} <br />
        <SignOutButton />
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
