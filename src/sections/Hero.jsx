import React, { useState, useEffect } from "react";
import { heroText, roles, words } from "../constants";

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text flex flex-col gap-2">
              <span className="slide">
                <span className="wrapper">
                  {words.map((word) => (
                    <span
                      key={word.text}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span>{word.text},</span>
                    </span>
                  ))}
                </span>
              </span>

              <h1>
                I'm
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  {" "}
                  William Chung
                </span>{" "}
              </h1>
            </div>

            <p className="text-white-50 md:text-xl">
              {heroText}
              <span
                key={index}
                className="typewriter text-purple-500"
                style={{ "--chars": roles[index].length }}
              >
                {" "}{roles[index]}
              </span>
            </p>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
