import React from "react";
import { fadeIn } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  link,
  iconLists,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full max-w-[520px]"
    >
      <Tilt
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        scale={1.02}
        transitionSpeed={450}
        gyroscope={true}
        className="w-full rounded-[2rem] border border-white/10 bg-[#13162D] p-0 shadow-xl"
      >

        {/* IMAGE */}
        <div className="w-full aspect-[16/9] overflow-hidden rounded-[1.5rem] ">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* CONTENT */}
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
              <p className="flex lg:text-xl md:text-base text-sm text-purple-400">
                <img src="images/github.png" className="w-[32px]" />
              </p>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section className="py-20 px-4">
      <h1 className="font-bold text-4xl md:text-5xl text-center text-white">
        A selection of <span className="text-purple-400">recent projects</span>
      </h1>

      <div className="mt-14 flex flex-wrap items-stretch justify-center gap-10 px-20">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
