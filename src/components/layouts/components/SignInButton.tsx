"use client";
import { Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function SignInButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <Button variant="outlined" onClick={() => signOut()}>
        {session.user.name}님 Log Out
      </Button>
    );
  }

  return (
    <Button variant="outlined" onClick={() => signIn()}>
      LogIn
    </Button>
  );
}

export default SignInButton;
