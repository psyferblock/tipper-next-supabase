import supabase from "@/utils/supabase";

export default async function getPictureUrlsOfReel(reelId) {
  const { data, error } = await supabase
    .from("highlight_media")
    .select("*")
    .eq("entity_highlight_id", reelId);
  if (error) throw error;
  console.log("arrayOfUrls of reel returned:", data);
}
