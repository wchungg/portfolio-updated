import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { projects } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectCard = React.forwardRef(
  ({ name, description, tags, image, link, iconLists }, ref) => {
    return (
      <div ref={ref} className="w-full max-w-[520px]">
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          scale={1.02}
          transitionSpeed={450}
          gyroscope={true}
          className="w-full rounded-[2rem] border border-white/10 bg-[#13162D] p-0 shadow-xl"
        >
          <div className="w-full aspect-[16/9] overflow-hidden rounded-[1.5rem]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="mt-8 px-6 pb-6">
            <h1 className="font-bold text-white lg:text-2xl md:text-xl text-lg leading-tight line-clamp-2">
              {name}
            </h1>

            <p className="mt-4 text-[#BEC1DD] lg:text-xl md:text-base text-sm font-light leading-relaxed line-clamp-3">
              {description}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {tags?.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[15px] font-medium ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center">
                {iconLists?.map((icon, iconIndex) => (
                  <div
                    key={iconIndex}
                    className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * iconIndex + 2}px)`,
                    }}
                  >
                    <img
                      src={icon}
                      alt="tech icon"
                      className="w-full h-full p-2 object-contain"
                    />
                  </div>
                ))}
              </div>

              <div
                onClick={() => link && window.open(link, "_blank")}
                className="flex justify-center items-center cursor-pointer"
              >
                <img src="/images/github.png" alt="github" className="w-[32px]" />
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

const Works = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * index,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <h1 className="font-bold text-4xl md:text-5xl text-center text-white">
        A selection of <span className="text-purple-400">recent projects</span>
      </h1>

      <div className="mt-14 flex flex-wrap items-stretch justify-center gap-10 px-20">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            ref={(el) => (cardRefs.current[index] = el)}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
