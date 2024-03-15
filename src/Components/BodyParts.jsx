import React from "react";
import { useState, useEffect } from "react";
import Bodypart from "./BodyPart";

const BodyParts = ({ setBodyPart}) => {

  const [bodyParts, setBodyParts] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": '34cfee01d7msh7e579f9f6df3bdbp1e4ac4jsn3505035d58a1',
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  useEffect(() => {
    featchData();
  }, []);

  const featchData = async () => {
    const data = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
      options
    );
    const jsonData = await data.json();
    // used spread operator and add all to the start 
    setBodyParts(["All" ,...jsonData]);
  };

  return (
    <>
      <div className="bodyparts-container">
        <div className="scrollbar">
           { 
            bodyParts.map((part)=>(
              <Bodypart resdata={part} setBodyPart={setBodyPart}/>
            ))
           }
        </div>
      </div>
    </>
  );
};

export default BodyParts;


