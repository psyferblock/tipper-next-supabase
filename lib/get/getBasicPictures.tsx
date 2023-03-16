import { supabase } from "@/utils/supabase-browser";

export default async function getBasicPictures(mediaCategory, entityId) {
  const { data, error } = await supabase
    .from("entity_basic_media")
    .select()
    .eq("media_category", mediaCategory)
    .eq("entity_id", entityId);
  if (error) throw error;
  console.log("arrayOfPictures of category returned:", data);
  return data;
}
