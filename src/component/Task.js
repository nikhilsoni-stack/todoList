import React, { useState, useEffect } from 'react';
import Style from './Task.module.css';

const Task = () => {
  const [isTaskOpen, setIsTaskOpen] = useState(true);
  const [taskList,setTaskList] = useState([]);

  
  const openAddTask = () => {
    setIsTaskOpen(false); 
  };
  const addTask = () =>{

      setIsTaskOpen(true);
  }

  return  (
    <div className={Style.rootWrapper}>
      <div className={Style.header}>
        Task
        <button type="button" onClick={openAddTask}>
          +
        </button>
      </div>
      <div className={Style.container}>
          {isTaskOpen ?  
        'nikhil'
          :"name is sing"
        }
          
        </div>
    </div>
  ) 
};


export default Task;
