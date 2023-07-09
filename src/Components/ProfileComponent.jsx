import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileOrder from "./ProfileOrder";
import { useDispatch, useSelector } from "react-redux";

function ProfileComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartQty = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  let { loading, error, userInfo } = userLogin;
  const { cartItems } = cartQty;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      {userInfo ? (
        <>
          <div className="cta-section">
            <div className="cta-inside">
              <img src={userInfo.photoURL} alt="" />
              <h1>Hello, {userInfo.displayName}</h1>

              <div className="input-button">
                <input type="text" value={userInfo.email} disabled />
              </div>
            </div>
          </div>
          <ProfileOrder />
        </>
      ) : (
        <>
          <div className="cta-section">
            <div className="cta-inside">
              <h1>No user found.</h1>
            </div>
          </div>
          <ProfileOrder />
        </>
      )}
    </>
  );
}

export default ProfileComponent;
