import { supabase } from "@/utils/supabase-browser";

export default async function createMenuCategory(
  categoryName,
  isPublic,
  entityId
) {
  const { data, error } = await supabase
    .from("menu_category")
    .insert({
      menu_category_name: categoryName,
      entity_id: entityId,
      is_menu_category_public: isPublic,
    })
    .select()
    .single();

  if (error) throw error;
  console.log("data returned after category creation", data);
  return data;
}
