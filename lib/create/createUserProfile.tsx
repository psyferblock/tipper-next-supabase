import { supabase } from "@/utils/supabase-browser";

export default async function createUserProfile(userId, emailAddress) {
  const { data, error } = await supabase
    .from("user_profile")
    .insert({
      user_id: userId,
      email_address: emailAddress,
    })
    .select()
    .single();

  if (error) throw error;
  console.log("user profile created after sign up", data);
}
