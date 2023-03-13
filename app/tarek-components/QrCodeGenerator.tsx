"use client";

import React, { FormEvent, useRef, useState } from "react";

//importing qr code from qrcode.react library //

import { QRCodeCanvas } from "qrcode.react";
import ReactDOM from 'react-dom';

const logo =
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcurezone.com%2Fupload%2FMembers%2Fexploding_tomato.jpg&f=1&nofb=1&ipt=29485f3834a68a08de704237ee294f516e4f0b35c94c0d758aed1786cd61f889&ipo=images";

export default function qrCodeGenerator() {
  const [url, setUrl] = useState<string>("www.google.com");
  const qrRef = useRef<string>();
  const [color, setColor] = useState<string>("black");
  const [size, setSize] = useState<string>("300");

  const downloadQrCode = (e: FormEvent) => {
    e.preventDefault();
    //  @ts-ignore
    let canvas = qrRef.current.querySelector("canvas");
    let imageUrl = canvas[0].toDataUrl("image/png"); // programatically generating an image
    let anchor = document.createElement("a");

    anchor.href = imageUrl; // programatically creaing a link .( by adding the image to the href value in the "a" tag created )

    anchor.download = "qr-code-image.png"; // programatially naming the image
    document.body.appendChild(anchor); // attaching it to the dom
    console.log("anchor", anchor);

    anchor.click(); // clicking on it
    document.body.removeChild(anchor); //and removing it
    console.log("anchor", anchor);

    setUrl(""); // setting the url in the form to empty

    // const canvas = document.getElementById("123456");
    // const image = canvas[0].toDataURL("image/png", 0.8);
    // // .replace("image/png", "image/octet-stream");
    // console.log("pageUrl", image);
    // let downloadLink = document.createElement("a");
    // downloadLink.href = image;
    // downloadLink.download = "123456.png"; // the name could be dynamic
    // document.body.appendChild(downloadLink);
    // downloadLink.click();
    // document.body.removeChild(downloadLink);
    // setUrl("");
  };

  const qrCode = (
    <QRCodeCanvas
    // renderAs="canvas"
      id="123456"
      size={parseInt(size)}
      value={url}
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
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
        />
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
