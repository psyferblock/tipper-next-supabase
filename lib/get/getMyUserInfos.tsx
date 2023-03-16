import { supabase } from "@/utils/supabase-browser";

export async function getMyUserInfos(userId) {
  const { data, error } = await supabase
    .from("user_profile")
    .select()
    .eq("user_id", userId);
  if (error) throw error;
  console.log("USER PROFILE:", data);
  return data[0];
}

export async function getMyUserInfosServer(supabaseServerClient, userId) {
  const { data, error } = await supabaseServerClient
    .from("user_profile")
    .select()
    .eq("user_id", userId);
  if (error) throw error;
  console.log("USER PROFILE:", data);
  return data[0];
}
