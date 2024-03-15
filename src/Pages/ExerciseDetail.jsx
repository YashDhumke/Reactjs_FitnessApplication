import React from "react";
import Detail from "../Components/Detail";
import Similar from "../Components/Similar";
import Videos from "../Components/Videos";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FeatchData } from "../Utils/FeatchData";
import ShimmerUI from "../Components/ShimmerUI";
// import { youtubeoptions } from "../Utils/FeatchData";

const ExerciseDetail = () => {
  const {id } = useParams();
  const [detail, setDetail] = useState({});
  const [similar, setSimilar] = useState([])
  // const [videos, setVideos] = useState([])

  useEffect(() => {
    featchExercisesData();
  }, [id]);

const featchExercisesData = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "34cfee01d7msh7e579f9f6df3bdbp1e4ac4jsn3505035d58a1",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  
  const detailurl = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`
  

  const detailData  = await FeatchData(detailurl, options)
  setDetail(detailData);
  // console.log(detailData)

  const similarurl = `https://exercisedb.p.rapidapi.com/exercises/target/${detailData.target}`
  const similarData = await FeatchData(similarurl, options);
  console.log(similarData)
  setSimilar(similarData)


}


  return (
    <>
      <Detail detail = {detail} />
      {similar.length !== 0 ? <Similar similar = {similar} /> : <ShimmerUI/>}
      <Videos />
    </>
  );
};

export default ExerciseDetail;
