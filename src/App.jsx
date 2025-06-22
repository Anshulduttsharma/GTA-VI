import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 50,
      ease: "Power4.easeInOut",
      duration: 2,
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.9,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full">
          <div className="landing w-full bg-black h-screen">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-8 px-8">
              <div className="logo flex gap-5">
                <div className="lines flex flex-col gap-1">
                  <div className="w-15 h-2 bg-white"></div>
                  <div className="w-8 h-2 bg-white"></div>
                  <div className="w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl leading-none -mt-[8px] text-white">Rockstar</h3>
              </div>
            </div>
            <div className="imagesdiv relative overflow-hidden w-full h-screen bg-red">
              <img
                className="w-full h-full object-cover absolute top-0 left-0"
                src="./sky.png"
                alt=""
              />
              <img
                className="w-full h-full object-cover absolute top-0 left-0"
                src="./bg.png"
                alt=""
              />
              <img
                className="absolute -bottom-[50%] left-1/2 -translate-x-1/2 w-[40%]"
                src="./girlbg.png"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
