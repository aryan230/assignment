import React from "react";

function CTA() {
  return (
    <div className="cta-section">
      <div className="cta-inside">
        <h1>Join the club and get the benefits</h1>
        <p>
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <div className="input-button">
          <input type="text" placeholder="your@email.com" />
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
