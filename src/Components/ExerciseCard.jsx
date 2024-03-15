import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = (props) => {
  const { resdata } = props;

  return (
    <>
      <Link to={"/exercise/" + resdata.id}>
        <hr />
        <div className="exercise">
          <>
            <div className="img">
              <img src={resdata.gifUrl} alt="" />
            </div>
            <div className="name">
              <h3>{resdata.name}</h3>
            </div>
            <div className="secmuscles">
              <p>{resdata.bodyPart}</p>
              <p>{resdata.target}</p>
            </div>
          </>
        </div>
        <hr />
      </Link>
    </>
  );
};

export default ExerciseCard;
