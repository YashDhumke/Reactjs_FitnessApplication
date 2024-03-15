import React from "react";
import { useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import ShimmerUI from "./ShimmerUI";


const HomeExercises = ({exerciseData, setExerciseData, bodypart}) => {



  
  
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": '34cfee01d7msh7e579f9f6df3bdbp1e4ac4jsn3505035d58a1',
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    const featchData = async () => {

      if(bodypart === "All"){
        const data = await fetch(
          "https://exercisedb.p.rapidapi.com/exercises?limit=100",
          options
        );
        const jsonData = await data.json();
        setExerciseData(jsonData);
        // console.log(jsonData)
      }
      else{
        const data = await fetch(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`,
          options
        );
        const jsonData = await data.json();
        setExerciseData(jsonData);
        console.log(jsonData)

      }
      
    };

    featchData();
  }, [bodypart]);

 if(!exerciseData) return (<ShimmerUI/> )

  return (
    <>
      <div className="exercisescontainer">
        <div className="title">
          <h3>Showing Results </h3>
        </div>
        <div className="cardcontainer">
          {
             exerciseData.map((card, index)=>(
              <ExerciseCard resdata = {card}  key={index}/>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default HomeExercises;
