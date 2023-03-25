import { getHighlightAndMediasServer } from "@/lib/get/getHiglightAndMedias";
import getPicturesOfHighlight, {
  getPicturesOfHighlightServer,
} from "@/lib/get/getPicturesOfHighlight";
import { createServerClient } from "@/utils/supabase-server";
import React from "react";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();
  // const picturesInHighlight = await getPicturesOfHighlightServer(supabase, 9);

  return (
    <>
      {/* <div>{picturesInHighlight.map((pic) => pic.media_url)}</div>
      {children} */}
    </>
  );
}
