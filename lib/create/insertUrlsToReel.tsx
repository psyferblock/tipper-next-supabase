import supabase from "@/utils/supabase";

export default async function insertUrlsToReel(
  arrayOfPictureUrls,
  highlightId
) {
  for (let i = 0; i < arrayOfPictureUrls.length; i++) {
    const { data, error } = await supabase
      .from("highlight_media")
      .insert({
        media_url: arrayOfPictureUrls[i],
        entity_highlight_id: highlightId,
      })
      .select();
    if (error) throw error;
    console.log("data returned after url is added to highlight", data);
    return data[0];
  }
}
