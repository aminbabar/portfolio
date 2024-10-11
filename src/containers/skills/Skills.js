import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              <div className="header-skills">Languages and Technologies:</div>
              <p>
                JavaScript (ES6+), Python, Ruby, C, C++, SQL, Bash, Java,
                Clojure, Prolog, Haskell, Perl, Assembly Language
              </p>

              <div className="header-skills">Technologies & Databases:</div>
              <p>HTML5, CSS3, MongoDB, PostgreSQL, AWS, GIT, REST APIs</p>

              <div className="header-skills">Frameworks & Libraries:</div>
              <p>
                React.js, Redux, Rails (Ruby on Rails), Express.js, Node.js,
                D3.js, RSpec Testing
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
