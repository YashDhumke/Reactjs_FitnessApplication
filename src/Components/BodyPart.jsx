import React from "react";
import img from "../assets/icons/gym.png";

const BodyPart = ({ resdata, setBodyPart }) => {

  return (
    <>
      <div
        className="boxcard"
        onClick={() => {
          console.log(resdata)
          setBodyPart(resdata)

        }}
      >
        <img src={img} alt="" />
        <p>{resdata}</p>
      </div>
    </>
  );
};

export default BodyPart;
