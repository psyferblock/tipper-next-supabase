import { supabase, supabaseServer } from "@/utils/supabase-browser";

export async function getMeClient() {
  //API Call
  let { data, error } = await supabase.from("entity").select("*");
  if (error) throw error;
  return data;
}

export async function getMeSever() {
  //API Call
  let { data, error } = await supabaseServer.from("entity").select("*");
  if (error) throw error;
  return data;
}
