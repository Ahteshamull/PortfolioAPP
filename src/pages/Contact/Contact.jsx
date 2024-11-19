import React from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <div className="cardtt card0 border-0">
          <div className="row">

            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                <div className="card1">
                <div className="row border-line">
                    
                      
                  <img className="image" src="contact.jpg" alt="Contact" />
                  
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card2 d-flex card border-0 px-4 py-3">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact with Me
                      <FaLinkedin color="blue" size={30} className="m-2" />
                      <FaGithub color="black" size={30} className="m-2" />
                      <FaFacebook color="blue" size={30} className="m-2" />
                      <FaInstagram color="red" size={30} className="m-2" />
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="Name"
                      placeholder="Write your name..!"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="Email"
                      placeholder="Enter your e-mail..!"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="Message"
                      placeholder="Write your message..!"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <button className=" contactbtn" type="submit">
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
