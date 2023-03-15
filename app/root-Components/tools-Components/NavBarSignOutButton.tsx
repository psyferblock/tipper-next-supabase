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
    <button onClick={handleSignOutButton} className="hover:text-sky-400">
      Sign Out
    </button>
  );
}
