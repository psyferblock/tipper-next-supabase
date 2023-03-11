import supabase from "@/utils/supabase";

export default async function insertUrlsToReel(
  arrayOfPictureUrls,
  newHighlightId
) {
  for (let i = 0; i < arrayOfPictureUrls.length; i++) {
    const { data, error } = await supabase
      .from("highlight_media")
      .insert({
        media_url: arrayOfPictureUrls[i],
        entity_highlight_id: newHighlightId,
      })
      .select();
    if (error) throw error;
    console.log("data returned after urls added to highlight", data);
  }
}
