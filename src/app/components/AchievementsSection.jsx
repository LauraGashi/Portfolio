"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Crafting seamless and innovative digital experiences with code.",
    value: "",
    boxStyle: "border-2 border-gray-400 p-8 rounded-lg text-center w-[1000px] text-2xl",
  }  
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-8 xl:gap-16 sm:py-16 xl:px-32 w-full">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              {/* Only the text inside the styled box, with text centered */}
              <div className={achievement.boxStyle}>
                <p className="text-white">{achievement.metric}</p> {/* No additional styling on the text */}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AchievementsSection;

