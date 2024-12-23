import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/auth">
        <Button>Go to Auth</Button>
      </Link>
      <Link href="/profile">
        <Button>Go to profile</Button>
      </Link>
      <Link href="/chat">
        <Button>Go to chat</Button>
      </Link>
    </div>
  );
}
