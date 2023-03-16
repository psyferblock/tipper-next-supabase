import React from "react";
import Stories from "./Stories";
function Demo() {
  return (
    <div>
      <h1 id="header">&nbsp;</h1>

      <a
        href="https://ramon.codes/projects/zuck.js"
        target="_blank"
        className="disclaimer"
      >
        <img src="ICON.png" alt="zuck.js logo" />

        <p>
          This a demonstration of <strong>zuck.js</strong> javascript library.
        </p>
        <p>Not associated with Facebook, Instagram, WhatsApp or Snapchat.</p>
      </a>

      <Stories />

      <div className="skin">
        Choose your theme:{" "}
        <select id="skin" onChange={(event) => changeSkin(event.target.value)}>
          <option value="Snapgram">Snapgram (without fullscreen)</option>
          <option value="FaceSnap">FaceSnap (with fullscreen)</option>
          <option value="VemDeZAP">VemDeZAP (timeline + arrows)</option>
          <option value="Snapssenger">Snapssenger (with previews)</option>
        </select>
      </div>
    </div>
  );
}

export default Demo;
