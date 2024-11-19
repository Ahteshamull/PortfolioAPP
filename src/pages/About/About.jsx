import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <>
      
        <div className="container-fluid" id="about">
          <div className="about">
            <div className="row">
              <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                <img src="1111.jpg" alt="about-img" />
              </div>
              <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                <h1>About me</h1>
                <p>
                  Hey I am Ahteshamul Hasan. I love programming , so from
                  2023 I joined MARN In today’s tech landscape, building web
                  applications with the MERN stack (MongoDB, Express.js,
                  React.js, Node.js) has become increasingly popular due to its
                  flexibility, scalability, and performance. However, developing
                  robust MERN stack applications requires adherence to best
                  practices across various aspects of development. In this
                  guide, we’ll explore a comprehensive set of best practices to
                  follow when creating MERN stack applications, ensuring
                  efficiency, maintainability, and scalability throughout the
                  development process.
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default About;
