"use client";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase-browser";

export default function NavBarSignOutButton() {
  const router = useRouter();
  async function handleSignOutButton() {
    await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <>
      <button onClick={handleSignOutButton} className="hover:text-sky-400">
        Sign Out
      </button>
    </>
  );
}
