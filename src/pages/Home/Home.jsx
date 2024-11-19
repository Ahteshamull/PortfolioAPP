import React from "react";
import { useTheme } from "../../Context/Theme";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";

import Resume from "../../assets/docs/Hasan-resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <h2>Hey✌️I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer !",
                  "MERN Stack Developer !",
                  "React native Developer !",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="http://api.whatsapp.com/send?phone=+8801924542671"
            >
              Hire Me
            </a>
            <a className="btn btn-CV" href={Resume} download="Hasan-resume.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
