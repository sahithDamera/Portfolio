import { useContext, useState } from "react";
import { styles } from "../styles";
import { context } from "../App";
import { websites } from "../constants";
import { dropdown, github, popout } from "../assets";

const Websites = () => {
  const { isLight } = useContext(context);
  const [activeExperience, setActiveExperience] = useState<number>(0);
  const [activeEducation, setActiveEducation] = useState<number>(0);

  const education = [
    {
      degree: "Masters",
      institution: "University of New Haven",
      description: "Master of Science in Data Science, 2022 - 2023",
      link: "https://www.newhaven.edu/index.php",
    },
    {
      degree: "Bachelors",
      institution: "Gokaraju Rangaraju Institute of Engineering and Technology",
      description: "Bachelor of Technology, 2017 - 2021",
      link: "https://www.griet.ac.in/",
    },
  ];

  return (
    <div
      id="experience"
      className="mt-4 max-w-7xl mx-auto flex flex-col items-center justify-center"
    >
      <div
        className={`${styles.paddingX} w-full flex flex-col items-start justify-between`}
      >
        <p
          className={`${styles.sectionSubText} ${
            isLight ? "text-black-200" : "text-white-100"
          } mt-10 font-semibold`}
        >
          Where I worked
        </p>
        <h2
          className={`${styles.sectionHeadText} ${
            isLight ? "text-black-100" : "text-white-100"
          } mb-16`}
        >
          Experience & Education.
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full mb-10 md:p-4">
          <div
            className={`md:p-4 ${
              isLight ? "border-black" : "border-white"
            } w-full md:w-1/2`}
          >
            {websites.map((website, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 ${
                  isLight ? "border-black" : "border-white"
                } flex flex-col items-start justify-center ${
                  activeExperience === index ? "" : "hover:cursor-pointer"
                } gap-6 w-full`}
                onClick={() => setActiveExperience(index)}
              >
                <header className="flex justify-between items-center w-full">
                  <h3
                    className={`${styles.sectionSubText} ${
                      isLight ? "text-black-200" : "text-white-100"
                    } text-[1.05rem] md:text-lg font-bold`}
                  >
                    {website.title}
                  </h3>
                  <img
                    src={dropdown}
                    alt="dropdown"
                    className={`w-8 h-8 md:w-10 md:h-10 ${
                      isLight ? "" : "invert"
                    } ${activeExperience === index ? "hidden" : ""}`}
                  />
                  <div
                    className={`flex justify-end items-center gap-3 md:gap-5 ${
                      isLight ? "" : "invert"
                    } ${activeExperience === index ? "" : "hidden"}`}
                  >
                    <a href={website.link} target="_blank">
                      <img
                        src={popout}
                        alt="websiteLink"
                        className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 active:scale-[1.2]"
                      />
                    </a>
                    <a href={website.source} target="_blank">
                      <img
                        src={github}
                        alt="githubLink"
                        className="w-6 h-6 md:w-8 md:h-8 hover:scale-110"
                      />
                    </a>
                  </div>
                </header>
                <p
                  className={`${activeExperience === index ? "" : "hidden"} ${
                    isLight
                      ? "text-secondary-text-light"
                      : "text-secondary-dark"
                  } text-sm md:text-base max-w-1/2 leading-[30px] md:ml-3`}
                >
                  {website.description}
                </p>
                <div
                  className={`${
                    activeExperience === index ? "" : "hidden"
                  } flex gap-2 md:gap-3 w-full justify-center md:justify-end`}
                >
                  {website.stack.map((tech, techIndex) => (
                    <img
                      key={techIndex}
                      src={tech}
                      className="w-7 h-7 md:w-10 md:h-10"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            className={`md:p-4 ${
              isLight ? "border-black" : "border-white"
            } w-full md:w-1/2`}
          >
            {education.map((edu, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 ${
                  isLight ? "border-black" : "border-white"
                } flex flex-col items-start justify-center ${
                  activeEducation === index ? "" : "hover:cursor-pointer"
                } gap-6 w-full`}
                onClick={() => setActiveEducation(index)}
              >
                <header className="flex justify-between items-center w-full">
                  <h3
                    className={`${styles.sectionSubText} ${
                      isLight ? "text-black-200" : "text-white-100"
                    } text-[1.05rem] md:text-lg font-bold`}
                  >
                    {edu.degree}
                  </h3>
                  <img
                    src={dropdown}
                    alt="dropdown"
                    className={`w-8 h-8 md:w-10 md:h-10 ${
                      isLight ? "" : "invert"
                    } ${activeEducation === index ? "hidden" : ""}`}
                  />
                  <div
                    className={`flex justify-end items-center gap-3 md:gap-5 ${
                      isLight ? "" : "invert"
                    } ${activeEducation === index ? "" : "hidden"}`}
                  >
                    <a href={edu.link} target="_blank">
                      <img
                        src={popout}
                        alt="educationLink"
                        className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 active:scale-[1.2]"
                      />
                    </a>
                  </div>
                </header>
                <p
                  className={`${activeEducation === index ? "" : "hidden"} ${
                    isLight
                      ? "text-secondary-text-light"
                      : "text-secondary-dark"
                  } text-sm md:text-base max-w-1/2 leading-[30px] md:ml-3`}
                >
                  {edu.institution}
                </p>
                <p
                  className={`${activeEducation === index ? "" : "hidden"} ${
                    isLight
                      ? "text-secondary-text-light"
                      : "text-secondary-dark"
                  } text-sm md:text-base max-w-1/2 leading-[30px] md:ml-3`}
                >
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {activeExperience !== null && (
        <iframe
          src={websites[activeExperience].link}
          className={`my-10 md:hidden w-screen h-[600px] border-2 ${
            isLight ? "border-black" : "border-white"
          } rounded-xl mb-5 landscape:hidden`}
        >
          Sorry Error!!
        </iframe>
      )}
      {activeEducation !== null && education[activeEducation].link && (
        <iframe
          src={education[activeEducation].link}
          className={`my-10 md:hidden w-screen h-[600px] border-2 ${
            isLight ? "border-black" : "border-white"
          } rounded-xl mb-5 landscape:hidden`}
        >
          Sorry Error!!
        </iframe>
      )}
    </div>
  );
};

export default Websites;
