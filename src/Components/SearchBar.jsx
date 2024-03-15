import React from 'react'
import { useState } from 'react';

const SearchBar = ({exerciseData, setExerciseData}) => {
     const [searchValue, setSearchValue] = useState("");
  return (
    <>
        <div className="searchcontainer">
            <div className="heading">
                <h4>Explore The Variety of Exercises According to your Need !!</h4>
            </div>
            <div className="searchbar">
                <input type="text" placeholder='Search for exercises' value={searchValue} onChange={(e)=>{
                    setSearchValue(e.target.value)
                }} />
                <div className="btn">
                    <button onClick={()=>{
                         const filteredData =  exerciseData.filter((item)=>(
                            item.bodyPart.includes(searchValue)
                        ))
                        console.log(filteredData)
                        setExerciseData(filteredData)
                    }}>Search</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchBar
