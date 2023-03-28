import { getBasicPicturesServer } from "@/lib/get/getBasicPictures";
import { getEntityInfosServer } from "@/lib/get/getEntityInfos";
import { createServerClient } from "@/utils/supabase-server";
import { ManageEntityInfosContextProvider } from "./EntityInfoContext";

export default async function ManageEntityInfosLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { entityId: number };
}) {
  // Fetching from DB
  const supabase = createServerClient();
  const entityInfos = await getEntityInfosServer(supabase, params.entityId);
  const basicPictures = await getBasicPicturesServer(supabase, params.entityId);

  const arrayOfCoverPictureObjects = basicPictures.filter(
    (pictureObject) => pictureObject.media_category == "cover_picture"
  );

  //Getting the logo url and passing to context
  const arrayOfLogoPictureObject = basicPictures.filter(
    (pictureObject) => pictureObject.media_category == "logo_picture"
  );
  const logoPictureObject = arrayOfLogoPictureObject[0];

  console.log("logoPictureObject::", logoPictureObject);

  return (
    <ManageEntityInfosContextProvider
      entityInfos={entityInfos}
      coverPictures={arrayOfCoverPictureObjects}
      logoPictureObject={logoPictureObject}
    >
      {children}
    </ManageEntityInfosContextProvider>
  );
}
