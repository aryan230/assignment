import { doc, getDoc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { useSelector } from "react-redux";

function ProfileOrder() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  let { loading, error, userInfo } = userLogin;

  const getData = async () => {
    const docRef = doc(db, "orders", userInfo.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data().data);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  useEffect(() => {
    if (userInfo) {
      getData();
    }
  }, []);
  return (
    <div className="profile-order">
      {data ? (
        <div className="profile-order-container">
          <h1>Orders</h1>
          <div className="orders-inside">
            {data.map((doc) => (
              <div className="order-element link-hidder ">
                <div className="svg-center-order">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="#000000"
                    className="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M53.6 1023.2c-6.4 0-12.8-2.4-17.6-8-4.8-4.8-7.2-11.2-6.4-18.4L80 222.4c0.8-12.8 11.2-22.4 24-22.4h211.2v-3.2c0-52.8 20.8-101.6 57.6-139.2C410.4 21.6 459.2 0.8 512 0.8c108 0 196.8 88 196.8 196.8 0 0.8-0.8 1.6-0.8 2.4v0.8H920c12.8 0 23.2 9.6 24 22.4l49.6 768.8c0.8 2.4 0.8 4 0.8 6.4-0.8 13.6-11.2 24.8-24.8 24.8H53.6z m25.6-48H944l-46.4-726.4H708v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8s-44.8-20-44.8-44.8c0-14.4 7.2-27.2 20-36h0.8v-57.6H363.2v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8-24.8 0-44.8-20-44.8-44.8 0-14.4 7.2-27.2 20-36h0.8v-57.6H125.6l-46.4 726.4zM512 49.6c-81.6 0-148.8 66.4-148.8 148.8v3.2h298.4l-0.8-1.6v-1.6c0-82.4-67.2-148.8-148.8-148.8z"
                      fill=""
                    />
                  </svg>
                </div>

                <h4>Subtotal £{doc.totalPrice}</h4>
                <p>Order ID: {doc.id}</p>
                <button
                  className=""
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/order/${doc.id}`);
                  }}
                >
                  View order
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="profile-order-container">
          <h1>No Orders Found.</h1>
        </div>
      )}
    </div>
  );
}

export default ProfileOrder;
