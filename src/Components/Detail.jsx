import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ detail }) => {
  console.log(detail);

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: detail.bodyPart,
    },
    {
      icon: TargetImage,
      name: detail.target,
    },
    {
      icon: EquipmentImage,
      name: detail.equipment,
    },
  ];

  return (
    <>
      <div className="detailcontainer">
        <div className="img">
          <img src={detail.gifUrl} alt="" />
        </div>
        <div className="leftcontent">
          <div className="name">
            <h2>{detail.name}</h2>
          </div>

          <div className="dis">
            <p>
              Exercises keep you strong . {detail.name} is one of the best
              exercise . <br /> Exercise to target your {detail.target}. It will
              help you to improve your mood and gain energy.
            </p>
            <p>Targeted Muscle is : {detail.target}</p>
            <p>The required equipment is : {detail.equipment}</p>
          </div>

          <div className="extra">
            {extraDetail?.map((item) => (
              <>
                <div className="item">
                  <img src={item.icon} alt="" />
                  <h3>{item.name}</h3>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
