import React, { useState, useEffect } from "react";
import { heroText, roles, greetings } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    gsap.fromTo('.hero-text',
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: 'power2.inOut'
        }
    )
  })

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT: HERO TEXT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text flex flex-col gap-2">
              <span className="slide">
                <span className="wrapper">
                  {greetings.map((greet) => (
                    <span
                      key={greet.text}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={greet.imgPath}
                        alt={greet.text}
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span>{greet.text},</span>
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
                {" "}
                {roles[index]}
              </span>
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="View my Work"
            />
          </div>
        </header>

        {/* LEFT: HERO TEXT */}
        <figure>
            <div className="hero-3d-layout">
            <HeroExperience />
            </div>
        </figure>
      </div>

        <AnimatedCounter />
      
    </section>
  );
};

export default Hero;
