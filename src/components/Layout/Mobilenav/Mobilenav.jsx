import React, { useState } from "react";
import "./Mobilenav.css";

import { Link } from "react-scroll";
import {
  FcAbout,
  FcReadingEbook,
  FcHome,
  FcWorkflow,
  FcBiotech,
  FcDiploma2,
  FcBusinessContact,
  FcMenu,
} from "react-icons/fc";
import { CgMenuMotion } from "react-icons/cg";

const Mobilenav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
    const handleMenuClick = () => { 
setOpen(false);
    }
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <CgMenuMotion size={30} className="navIcon" onClick={handleOpen} />
          ) : (
            <FcMenu size={30} className="navIcon" onClick={handleOpen} />
          )}
          <span className="mbnv"> MY Portfolio</span>
        </div>
        {open && (
          <div className="mobile-nav-menus">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcHome /> Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcAbout /> About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcReadingEbook /> Education
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="task"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcBiotech /> Tach stack
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcDiploma2 /> Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcWorkflow /> Work Experience
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcBusinessContact /> Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Mobilenav;
