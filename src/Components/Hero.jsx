import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="main-container-inside">
        <div className="main-c-left">
          <div className="main-c-left-inside">
            <div className="main-c-left-inside-top">
              <h2>
                The furniture brand for the <br />
                future, with timeless designs
              </h2>
              <button
                onClick={() => {
                  navigate("/products");
                }}
              >
                View collection
              </button>
            </div>
            <p>
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
        </div>
        <div className="main-c-right" />
      </div>
    </div>
  );
}

export default Hero;
