import { supabase } from "@/utils/supabaseClient";

export default async function createMenuItem(
  itemName: string,
  itemDescription: string,
  itemPrice: string,
  itemPictureUrl,
  menuCategoryId
) {
  const { data, error } = await supabase
    .from("menu_item")
    .insert({
      item_name: itemName,
      item_price: itemPrice,
      item_description: itemDescription,
      item_picture_url: itemPictureUrl,
      menu_category_id: menuCategoryId,
    })
    .select();

  if (error) throw error;
  console.log("data returned after item creation", data);
}
