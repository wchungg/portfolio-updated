import React, { useEffect, useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import { motion } from "motion/react";
import { skills } from "../constants/index";

const SkillsSection = () => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [highlightStyle, setHighlightStyle] = useState({
    width: 0,
    height: 0,
    transform: "translate(0px, 0px)",
  });

  const categories = [
    "All",
    ...Array.from(
      new Set(skills.flatMap((skill) => skill.categories || []))
    ),
  ];

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter((skill) =>
          (skill.categories || []).includes(activeFilter)
        );

  useEffect(() => {
    itemRefs.current = [];
    setActiveIndex(0);
  }, [activeFilter]);

  useEffect(() => {
    const updateHighlight = (index = activeIndex) => {
      if (!containerRef.current || !itemRefs.current[index]) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const itemRect = itemRefs.current[index].getBoundingClientRect();
      setHighlightStyle({
        width: itemRect.width,
        height: itemRect.height,
        transform: `translate(${itemRect.left - containerRect.left}px, ${
          itemRect.top - containerRect.top
        }px)`,
      });
    };

    updateHighlight(activeIndex);

    const handleResize = () => updateHighlight(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, filteredSkills.length]);

  return (
    <section
      id="Skills"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Skills" sub="Tools I Use" />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                activeFilter === category
                  ? "border-white text-white bg-black-100"
                  : "border-black-50 text-white-50 bg-black-200/40 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <div
            ref={containerRef}
            className="relative grid auto-rows-fr grid-cols-2 md:grid-cols-4 gap-3 md:gap-6"
          >
            <motion.div
              className="absolute bg-black-100 border border-black-50 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              style={highlightStyle}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            />

            {filteredSkills.map((skill, index) => {
              const Icon = skill.Icon;
              return (
                <button
                  key={skill.name}
                  ref={(el) => (itemRefs.current[index] = el)}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  className="relative z-10 h-28 md:h-36 flex flex-col items-center justify-center gap-4 rounded-2xl border border-black-50 bg-black-200/40 backdrop-blur-sm text-white-50 transition-colors duration-300 hover:text-white"
                >
                  <Icon className="text-3xl md:text-4xl" />
                  <span className="text-sm md:text-base font-semibold tracking-wide">
                    {skill.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
