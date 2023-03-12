import supabase from "@/utils/supabase";

export default async function deletePictureFromReel(pictureId) {
  const { data, error } = await supabase
    .from("highlight_media")
    .delete()
    .eq("id", pictureId);
  if (error) throw error;
  console.log("after url is deleted from reel", data);
}
