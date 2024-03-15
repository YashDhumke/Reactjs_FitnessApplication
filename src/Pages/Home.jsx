import React from "react";
import { useState } from 'react';
import HomeExercises from '../Components/HomeExercises';
import BodyParts from '../Components/BodyParts';
import SearchBar from '../Components/SearchBar';
const Home = () => {
  const [exerciseData, setExerciseData] = useState([]);
  const [bodypart, setBodyPart] = useState("All")

  return (
    <div>
      <SearchBar
        exerciseData={exerciseData}
        setExerciseData={setExerciseData}
      />
      <BodyParts setBodyPart={setBodyPart} />
      <HomeExercises
        exerciseData={exerciseData}
        setExerciseData={setExerciseData}
        bodypart={bodypart}
        
      />
    </div>
  );
};

export default Home;
