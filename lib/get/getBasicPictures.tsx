import { supabase } from "@/utils/supabase-browser";

export async function getBasicPictures(mediaCategory, entityId) {
  const { data, error } = await supabase
    .from("entity_basic_media")
    .select()
    .eq("media_category", mediaCategory)
    .eq("entity_id", entityId);
  if (error) throw error;
  console.log("arrayOfPictures of category returned:", data);
  return data;
}

export async function getBasicPicturesServer(
  supabaseServerClient,
  mediaCategory,
  entityId
) {
  const { data, error } = await supabaseServerClient
    .from("entity_basic_media")
    .select()
    .eq("media_category", mediaCategory)
    .eq("entity_id", entityId);
  if (error) throw error;
  console.log("arrayOfPictures of category returned:", data);
  return data;
}
