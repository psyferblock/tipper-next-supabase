import supabase from "@/utils/supabase";

export default async function deleteReel(reelId) {
  const { data, error } = await supabase
    .from("entity_reel")
    .delete()
    .eq("id", reelId);
  if (error) throw error;
  console.log(data);
}
