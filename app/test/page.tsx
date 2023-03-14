import getPicturesOfHighlight from "@/lib/get/getPicturesOfHighlight";
import Highlight from "./Highlight";

export default async function HighlightDisplayModal() {
  const picturesInHighlight = await getPicturesOfHighlight(9);
  return (
    <div>
      <Highlight picturesInHighlight={picturesInHighlight} />
    </div>
  );
}
