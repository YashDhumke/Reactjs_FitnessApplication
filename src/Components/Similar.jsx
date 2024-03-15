import React from 'react'
import ExerciseCard from './ExerciseCard'

const Similar = ({similar}) => {

  // console.log(similar)
  
  
  return (
    <div className="similar_container">
      <div className="heading">
        <h3>Similar Exercises</h3>
      </div>
      <div className="exercisescontainer">
        {
          similar.map((exercise, index)=>(
            <ExerciseCard resdata = {exercise} key={index}/>
          )) 
        }
      </div>
    </div>
  )
}

export default Similar

