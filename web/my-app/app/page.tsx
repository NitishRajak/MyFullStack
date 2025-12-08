"use client";
import { useRoot } from "@/context/RootProvider";
import Image from "next/image";
import Dashboard from "./(dashboard)/dashboard/page";
import Login from "./(auth)/login/page";

export default function Home() {
  const { user } = useRoot();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {user ? <Dashboard /> : <Login />}
    </div>
  );
}
