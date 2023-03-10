import supabase from "@/utils/supabase";

export default async function createReel(reelName, entityId) {
  const { data, error } = await supabase
    .from("entity_reel")
    .insert({
      reel_name: reelName,
      entity_id: entityId,
    })
    .select();

  if (error) throw error;
  console.log("data returned after reel creation", data);
}