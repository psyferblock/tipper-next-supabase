"use client";

import React, { FormEvent, useRef, useState } from "react";

//importing qr code from qrcode.react library //

import { QRCodeCanvas } from "qrcode.react";
import ReactDOM from "react-dom";
import Link from "next/link";

export default function qrCodeGenerator({ pageUrl, logo }) {
//   const [url, setUrl] = useState<string>("");
  const qrRef = useRef<HTMLDivElement | null>(null);
  const [color, setColor] = useState<string>("black");
  const [size, setSize] = useState<string>("300");

  const downloadQrCode = (e: FormEvent) => {
    e.preventDefault();
    //  @ts-ignore
    // setUrl(pageUrl);
    let canvas = qrRef.current?.querySelector("canvas");

    let imageUrl = canvas.toDataURL("image/png", 0.8); // programatically generating an image
    let anchor = document.createElement("a");

    anchor.href = imageUrl; // programatically creaing a link .( by adding the image to the href value in the "a" tag created )
    // console.log("imageUrl", imageUrl);
    anchor.download = "qr-code-image.png"; // programatially naming the image
    document.body.appendChild(anchor); // attaching it to the dom
    // console.log("anchor", anchor);

    anchor.click(); // clicking on it
    document.body.removeChild(anchor); //and removing it
    // console.log("anchor", anchor);

    // setUrl(""); // setting the url in the form to empty
  };

  const qrCode = (
    <QRCodeCanvas
      // renderAs="canvas"
      id="canvas"
      // typeof="canvas"
      size={parseInt(size)}
      value={pageUrl}
      //background color
      bgColor="white"
      // font color
      fgColor="#141926"
      // this one is the level of detail of the code. some levels are used when there is more data on the code. for us level "H" should be good enough.
      level="H"
      imageSettings={{
        src: logo, // this src button gets the image needed. for now its hard coded but will make it dynamic when its tested and done.
        excavate: true,
        // these two the "width " and "height" are the size of the image. here we marked them at 10% of the total size.
        width: parseInt(size) * 0.2, // thes
        height: parseInt(size) * 0.2,
      }}
    />
  );

  return (
    <>
      <form onSubmit={downloadQrCode} className="">
        {/* <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
        /> */}
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="color"
        />
        <input
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="size"
        />

        <button type="submit">Download QR Code</button>
      </form>

      <div className="qr-container__qr-code" ref={qrRef}>
        {qrCode}
      </div>
    </>
  );
}
