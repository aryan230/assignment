import React, { useEffect } from "react";
import ProfileComponent from "../Components/ProfileComponent";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Profile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <ProfileComponent />
      <Footer />
    </>
  );
}

export default Profile;
