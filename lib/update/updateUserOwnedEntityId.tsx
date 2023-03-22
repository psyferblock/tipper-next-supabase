import { supabase } from "@/utils/supabase-browser";

export default async function updateUserOwnedEntityId(userId, entityId) {
  const { data, error } = await supabase
    .from("user_profile")
    .update({
      user_owned_entity_id: entityId,
    })
    .eq("user_id", userId)
    .select();
  if (error) throw error;
  console.log(data);
}
