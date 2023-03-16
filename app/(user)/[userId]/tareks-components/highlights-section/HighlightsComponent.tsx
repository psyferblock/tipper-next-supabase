"use client"
import React, { useEffect, useRef } from "react";
import {timestamp,getCurrentSkin,changeSkin} from "./HighlightHelpers"
import Zuck from "zuck.js"


function HighlightsComponent() {
  const storiesEl = useRef(null);
  const storiesFunc = useRef(null);

  const currentSkin = getCurrentSkin();

  useEffect(() => {
    if (storiesEl.current && !storiesFunc.current) {
      storiesFunc.current = Zuck(storiesEl.current, {
        backNative: true,
        previousTap: true,
        skin: currentSkin["name"],
        autoFullScreen: currentSkin["params"]["autoFullScreen"],
        avatars: currentSkin["params"]["avatars"],
        paginationArrows: currentSkin["params"]["paginationArrows"],
        list: currentSkin["params"]["list"],
        cubeEffect: currentSkin["params"]["cubeEffect"],
        localStorage: true,
        stories: [
          {
            id: "ramon",
            photo:
              "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/1.jpg",
            name: "Ramon",
            time: timestamp(),
            items: [
              {
                id: "ramon-1",
                type: "photo",
                length: 3,
                src: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/1.jpg",
                preview:
                  "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/1.jpg",
                link: "",
                linkText: false,
                time: timestamp(),
              },
              {
                id: "ramon-2",
                type: "video",
                length: 0,
                src: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/2.mp4",
                preview:
                  "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/2.jpg",
                link: "",
                linkText: false,
                time: timestamp(),
              },
              {
                id: "ramon-3",
                type: "photo",
                length: 3,
                src: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/3.png",
                preview:
                  "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/3.png",
                link: "https://ramon.codes",
                linkText: "Visit my Portfolio",
                time: timestamp(),
              },
            ],
          },
          {
            id: "gorillaz",
            photo:
              "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/2.jpg",
            name: "Gorillaz",
            time: timestamp(),
            items: [
              {
                id: "gorillaz-1",
                type: "video",
                length: 0,
                src: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/4.mp4",
                preview:
                  "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/4.jpg",
                link: "",
                linkText: false,
                time: timestamp(),
              },
              {
                id: "gorillaz-2",
                type: "photo",
                length: 3,
                src: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/5.jpg",
                preview:
                  "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/5.jpg",
                link: "",
                linkText: false,
                time: timestamp(),
              },
            ],
          },
          {
            id: "ladygaga",
            photo:
              "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/3.jpg",
            name: "Lady Gaga",
            time: timestamp(),
            items: [
              {
                id: "ladygaga-1",
                type: "photo",
                length: 5,
                src: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/6.jpg",
                preview:
                  "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/6.jpg",
                link: "",
                linkText: false,
                time: timestamp(),
              },
              {
                id: "ladygaga-2",
                type: "photo",
                length: 3,
                src: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/7.jpg",
                preview:
                  "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/7.jpg",
                link: "http://ladygaga.com",
                linkText: false,
                time: timestamp(),
              },
            ],
          },
          {
            id: "starboy",
            photo:
              "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/4.jpg",
            name: "The Weeknd",
            time: timestamp(),
            items: [
              {
                id: "starboy-1",
                type: "photo",
                length: 5,
                src: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/8.jpg",
                preview:
                  "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/8.jpg",
                link: "",
                linkText: false,
                time: timestamp(),
              },
            ],
          },
          {
            id: "riversquomo",
            photo:
              "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/users/5.jpg",
            name: "Rivers Cuomo",
            time: timestamp(),
            items: [
              {
                id: "riverscuomo-1",
                type: "photo",
                length: 10,
                src: "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg",
                preview:
                  "https://raw.githubusercontent.com/ramonszo/assets/master/zuck.js/stories/9.jpg",
                link: "",
                linkText: false,
                time: timestamp(),
              },
            ],
          },
        ],
      });
    }
  }, [storiesEl.current()]);

  return <div className="storiesWrapper" id="stories" ref={storiesEl}></div>;
}

export default HighlightsComponent;
