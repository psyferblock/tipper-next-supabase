import { supabase } from "@/utils/supabase-browser";

export default async function createEntity(
  userId,
  entityName,
  entityTypeId,
  entityAddress,
  entityEmailAddress,
  entityPhoneNumber,
  tagsArray
) {
  const { data, error } = await supabase
    .from("entity")
    .insert({
      user_id: userId,
      entity_name: entityName,
      entity_type_id: entityTypeId,
      entity_address: entityAddress,
      entity_email: entityEmailAddress,
      entity_phone_number: entityPhoneNumber,
      entity_tags: tagsArray,
      is_verified: false,
    })
    .select()
    .single();

  if (error) throw error;
  console.log("data returned after entity creation", data);
  return data;
}
