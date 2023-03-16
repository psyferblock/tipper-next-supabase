import { supabase } from "@/utils/supabase-browser";

export async function getAllEntities() {
  let { data, error } = await supabase.from("entity").select("*");
  if (error) throw error;
  return data;
}

export async function getAllEntitiesServer(supabaseServerClient) {
  let { data, error } = await supabaseServerClient.from("entity").select("*");
  if (error) throw error;
  return data;
}
