import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

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

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-0.99",
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 1,
      bottom:"-45%",
      rotate: 0,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });
    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${xMove * 0.7}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1,
      });
    });
  }, [showContent]);

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
        <div className="main w-full rotate-[-5deg] scale-[1.5]">
          <div className="landing overflow-hidden relative w-full bg-black h-screen">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-8 px-8">
              <div className="logo flex gap-5">
                <div className="lines flex flex-col gap-1">
                  <div className="w-15 h-2 bg-white"></div>
                  <div className="w-8 h-2 bg-white"></div>
                  <div className="w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl leading-none -mt-[8px] text-white">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className="imagesdiv relative overflow-hidden w-full h-screen bg-red">
              <img
                className="w-full sky scale-[1.4] rotate-[-20deg] h-full object-cover absolute top-0 left-0"
                src="./sky.png"
                alt=""
              />
              <img
                className="w-full bg scale-[1.8] rotate-[-3deg] h-full object-cover absolute top-0 left-0"
                src="./bg.png"
                alt=""
              />
              <div className="text-white absolute flex flex-col gap-1  top-0 -translate-x-1/2 left-1/2">
                <h1 className="text-[8rem] text leading-none -ml-40">grand</h1>
                <h1 className="text-[8rem] text leading-none ml-40">theft</h1>
                <h1 className="text-[8rem] text leading-none -ml-20">auto</h1>
              </div>
              <img
                className="absolute character -bottom-[110%] left-1/2 -translate-x-1/2 w-[40%] scale-[3] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
              <div className="btmbar absolute text-white bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
                <div className="flex gap-4 items-center">
                  <i className="text-4xl ri-arrow-down-line"></i>
                  <h3 className="text-xl font-[Helvetica_Now_Display]">
                    Scroll down
                  </h3>
                </div>
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65px]"
                  src="./ps5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full px-10 h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex  text-white w-full h-[80%]">
              <div className="limg relative h-full w-1/2">
                <img
                  className="absolute top-1/2 scale-[0.8] left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt="imag"
                />
              </div>
              <div className="rg w-[35%]">
                <h1 className="text-7xl">Still Running</h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Numquam error nam earum recusandae soluta ab, at architecto
                  reprehenderit dolore quam neque, fuga optio!
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  minima consequatur dignissimos rerum illum possimus obcaecati
                  vel vitae hic illo dicta fuga, enim pariatur, accusantium
                  voluptate fugiat nam eius. Iste eos ullam recusandae
                  repudiandae eligendi.
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Minus obcaecati ex possimus eveniet eaque voluptatum dolorum
                  sunt temporibus incidunt nulla.
                </p>
                <button className="bg-yellow-500 mt-5 text-black px-5 py-5 text-3xl">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
