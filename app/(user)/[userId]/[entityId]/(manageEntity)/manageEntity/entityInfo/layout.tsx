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
  const coverPictures = await getBasicPicturesServer(
    supabase,
    "cover_picture",
    params.entityId
  );

  return (
    <ManageEntityInfosContextProvider
      entityInfos={entityInfos}
      coverPictures={coverPictures}
    >
      {children}
    </ManageEntityInfosContextProvider>
  );
}
