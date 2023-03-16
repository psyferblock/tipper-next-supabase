import { supabase } from "@/utils/supabase-browser";

export default async function updateBasicUserInfos(
  userId,
  fullName,
  dateOfBirth,
  gender,
  contactNumber
) {
  const { data, error } = await supabase
    .from("user_profile")
    .update({
      first_name: fullName,
      gender: gender,
      phone_number: contactNumber,
      date_of_birth: dateOfBirth,
    })
    .eq("user_id", userId)
    .select();
  if (error) throw error;
  console.log(data);
}
