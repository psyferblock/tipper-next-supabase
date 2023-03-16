import { supabase } from "@/utils/supabase-browser";

export default async function deleteMenuItem(menuItemId) {
  const { data, error } = await supabase
    .from("menu_item")
    .delete()
    .eq("id", menuItemId);
  if (error) throw error;
  console.log(data);
}
