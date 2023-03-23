import { supabase } from "@/utils/supabase-browser";

export default async function updateEntityInfos(
  entityId,
  tags,
  phoneNumber,
  emailAddress,
  instagramUrl,
  isInstagramUrlPublic,
  facebookUrl,
  isFacebookUrlPublic,
  whatsappNumber,
  isWhatsappNumberPublic,
  aboutUsDescription,
  aboutUsPictureUrl,
  isContactUsSectionPublic,
  contactUsDescription,
  contactUsPictureUrl
) {
  //Entity Infos Updating from Database
  const { data, error } = await supabase
    .from("entity")
    .update({
      entity_tags: tags,
      entity_phone_number: phoneNumber,
      entity_email: emailAddress,
      instagram_link: instagramUrl,
      is_instagram_url_public: isInstagramUrlPublic,

      facebook_link: facebookUrl,
      is_facebook_url_public: isFacebookUrlPublic,

      whatsapp_phone_number: whatsappNumber,
      is_whatsapp_number_public: isWhatsappNumberPublic,
      about_us_description: aboutUsDescription,
      about_us_picture_url: aboutUsPictureUrl,
      is_contact_us_public: isContactUsSectionPublic,
      contact_us_description: contactUsDescription,
      contact_us_picture_url: contactUsPictureUrl,
    })
    .eq("id", entityId)
    .select();
  if (error) throw error;
  console.log(data);
}
