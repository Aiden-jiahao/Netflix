import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, setshow] = useState(true);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setshow(true);
    } else {
      setshow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://p3fx.kgimg.com/stdmusic/240/20210527/20210527170201684379.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
