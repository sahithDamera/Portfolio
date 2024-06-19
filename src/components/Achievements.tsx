import React, { useContext } from "react";
import { context } from "../App";
import { achievements } from "../constants";
import { styles } from "../styles";

const AchievementCard = ({ title, icon, link }) => {
  return (
    <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 p-2 flex justify-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full relative"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2">
          <div className="w-full h-24 flex items-center justify-center bg-white">
            <img src={icon} alt={title} className="h-16 object-contain" />
          </div>
          <div className="p-2">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white text-center">
              {title}
            </h3>
          </div>
        </div>
        <svg
          className="absolute top-1 right-1 w-4 h-4 text-black"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5 10a1 1 0 011-1h7.586L10.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 11H6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
};

const Achievements = () => {
  const { isLight } = useContext(context);

  return (
    <div
      id="achievements"
      className={`py-16 ${
        isLight ? "bg-white" : "bg-gray-900"
      } transition-colors duration-500`}
    >
      <div className="container mx-auto px-2">
        <h2
          className={`${styles.sectionHeadText} ${
            isLight ? "text-black-100" : "text-white-100"
          } mb-12 whitespace-nowrap text-xl`} // Adjusted text size and margin
        >
          Certifications and Publications
        </h2>
        <div className="flex flex-wrap justify-center -m-2">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              title={achievement.title}
              icon={achievement.icon}
              link={achievement.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
