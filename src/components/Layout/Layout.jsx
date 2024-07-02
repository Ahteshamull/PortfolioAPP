import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { AiFillBackward, AiFillForward } from "react-icons/ai";
import "./Layout.css";
import Menus from "./Menus/Menus";

const Layout = () => {
  let [toggle, setToggle] = useState(true);

  let handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? " sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icon">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiFillBackward size={30} />
              ) : (
                <AiFillForward size={30} />
              )}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
