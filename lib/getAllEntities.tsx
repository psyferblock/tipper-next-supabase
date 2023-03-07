import supabase from "@/utils/supabase";

export default async function getAllEntities() {
  //API Call
  let { data, error } = await supabase.from("entity").select("*");
  if (error) throw error;
  return data;
}
