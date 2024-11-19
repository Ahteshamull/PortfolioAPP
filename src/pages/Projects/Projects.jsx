import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h1>
        <hr />
        <p className="pb-3 text-center">
          😎Here are my top 3 recent project with live links and source code{" "}
          <br />
          In this project, you will create a simple GUI application in jGrasp
          using the JavaFX framework. A template program is provided in which
          you will create four titled panes and place the panes inside a created
          accordion. Each titled pane has components to rate a movie - the first
          title pane contains two radio buttons with movie titles, the second
          title pane contains a slider to rate a movie, the third title pane
          contains a text area to type a comment, and the fourth title pane
          consists of an empty label. When you click on a button the program
          will display the movie review in the fourth title pane.
        </p>
        <div className="row" id="ads">
          

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify">Front-end</span>
                <img src="1.jpg" alt="cardimg" />
              </div>
              <div className="card-img-overly m-auto mt-3">
                <span className="card-details">HTML</span>
                <span className="card-details">CSS</span>
                <span className="card-details">React</span>
                <span className="card-details">Java script</span>
              </div>
              <div className="card-body text-center">
                <div className="add-title m-auto">
                  <h5 className="text-uppercase">Silver-Hawk</h5>
                </div>
                <a
                  className="btn-add"
                  href="https://ahteshamull.github.io/silver-hawk/"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify">Back-end</span>
                <img src="2.jpg" alt="cardimg" />
              </div>
              <div className="card-img-overly m-auto mt-3">
                <span className="card-details">React</span>
                <span className="card-details">Javascript</span>
                <span className="card-details">Tailwind</span>
                <span className="card-details">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="add-title m-auto">
                  <h5 className="text-uppercase">Omah</h5>
                </div>
                <a
                  className="btn-add"
                  href="https://ahteshamull.github.io/omah/"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify">Full Stack</span>
                <img src="3.jpg" alt="cardimg" />
              </div>
              <div className="card-img-overly m-auto mt-3">
                <span className="card-details">Node</span>
                <span className="card-details">React</span>
                <span className="card-details">Express</span>
                <span className="card-details">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="add-title m-auto">
                  <h5 className="text-uppercase">Veterinarian</h5>
                </div>
                <a
                  className="btn-add"
                  href="https://ahteshamull.github.io/veterinarian/"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Projects;
