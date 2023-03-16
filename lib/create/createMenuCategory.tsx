import { supabase } from "@/utils/supabase-browser";

export default async function createMenuCategory(categoryName, entityId) {
  const { data, error } = await supabase
    .from("menu_category")
    .insert({
      menu_category_name: categoryName,
      entity_id: entityId,
    })
    .select();

  if (error) throw error;
  console.log("data returned after category creation", data);
}
