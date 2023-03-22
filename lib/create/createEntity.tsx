import { supabase } from "@/utils/supabase-browser";

export default async function createEntity(
  userId,
  entityName,
  entityType,
  businessLocation,
  entityEmailAddress,
  entityPhoneNumber
) {
  const { data, error } = await supabase
    .from("entity")
    .insert({
      user_id: userId,
      entity_name: entityName,
      entity_type: entityType,
      //   location_id: businessLocation,
      entity_email: entityEmailAddress,
      entity_phone_number: entityPhoneNumber,
      is_verified: false,
    })
    .single();

  if (error) throw error;
  console.log("data returned after entity creation", data);
  return data;
}
