import supabase from "@/utils/supabase";

export default async function getMenuItems(categoryId: number) {
  //Menu Items Reading from Database
  const { data, error } = await supabase
    .from("menu_item")
    .select("*")
    .eq("menu_category_id", categoryId);
  if (error) throw error;
  return data;
}
