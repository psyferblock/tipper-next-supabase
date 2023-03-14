// A basic picture is a picture belonging to any category (cover photos, menu item photos,
// contact us photo) except the highlight category

import supabase from "@/utils/supabase";

export default async function deleteBasicPicture(pictureId) {
  const { data, error } = await supabase
    .from("entity_basic_media")
    .delete()
    .eq("id", pictureId);
  if (error) throw error;
  console.log("after picture is deleted from basic_entity_media", data);
}
