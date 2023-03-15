// A basic picture is a picture belonging to any category (cover photos, menu item photos,
// contact us photo) except the highlight category

import { supabase } from "@/utils/supabaseClient";

export default async function addBasicPictures(
  mediaCategory,
  arrayOfPictureUrls: string[],
  entityId
) {
  for (let i = 0; i < arrayOfPictureUrls.length; i++) {
    const { data, error } = await supabase
      .from("entity_basic_media")
      .insert({
        media_category: mediaCategory,
        media_url: arrayOfPictureUrls[i],
        entity_id: entityId,
      })
      .select();
    if (error) throw error;
    console.log("data returned after basic pictures are added:", data);
  }
}
