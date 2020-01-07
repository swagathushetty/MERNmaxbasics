import React from 'react';
import './App.css';

import GoalList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal'

const App=()=> {
  const courseGoals = [
    { id: 'cg1', text: 'Finish the course' },
    { id: 'cg2', text: 'Learn about the course topic' },
    { id: 'cg3', text: 'Help other people in udemy' }
  ]

  const addNewGoalHandler=(newGoal)=>{
    courseGoals.push(newGoal)
    console.log(courseGoals)
  }
  return (
    <div className="course-goals">
        <h2>Finish course goals</h2>
        <NewGoal onAddGoal={addNewGoalHandler} />
        <GoalList goals={courseGoals} />
    </div>
  );
}



export default App;
