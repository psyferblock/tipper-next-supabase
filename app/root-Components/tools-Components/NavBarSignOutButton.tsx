"use client";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { supabase } from "@/utils/supabaseClient";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NavBarSignOutButton() {
  const supabase = createBrowserSupabaseClient();

  async function handleSignOutButton() {
    await supabase.auth.signOut();
  }
  async function handleSignInButton() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "claude1.massaad@gmail.com",
      password: "123456",
    });
    if (error) throw error;
    const userId = data;
    console.log("data after sign in", userId);
    router.push("/");
  }
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      //refresh data
      router.refresh();
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, router]);

  return (
    <>
      <button onClick={handleSignOutButton} className="hover:text-sky-400">
        Sign Out
      </button>
      <button onClick={handleSignInButton} className="hover:text-sky-400">
        Sign IN
      </button>
    </>
  );
}
