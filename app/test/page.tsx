"use client";
import getPicturesOfHighlight from "@/lib/get/getPicturesOfHighlight";
import Highlight from "./Highlight";

export default function HighlightDisplayModal() {
  async function handle() {
    const picturesInHighlight = await getPicturesOfHighlight(9);
  }

  return (
    <div>
      hello <button onClick={handle}>la</button>
      {/* <Highlight picturesInHighlight={picturesInHighlight} /> */}
    </div>
  );
}
