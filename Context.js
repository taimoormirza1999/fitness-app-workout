import React, { createContext, useState } from "react";

const FitnessItems = createContext();

const FitnessContext = ({ children }) => {
  
  const [completed, setCompleted] = useState([{name:"",workout_id:0,day:0}]);
  const [currentChallange, setcurrentChallange] = useState([{challange_d:"",challange_name:"",day_completed:0}]);
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0.0);
  const [minutes, setMinutes] = useState(0);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  return (
    <FitnessItems.Provider
      value={{
        currentChallange, setcurrentChallange,
        completed,
        setCompleted,
        workout,
        setWorkout,
        calories,
        setCalories,
        minutes,
        setMinutes,
        currentExerciseIndex,
        setCurrentExerciseIndex,
      }}
    >
      {children}
    </FitnessItems.Provider>
  );
};

export {FitnessContext,FitnessItems}