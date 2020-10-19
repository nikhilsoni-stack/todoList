import React, { useState, useEffect } from 'react';
import Style from './Task.module.css';
import TaskList from './TaskList';
const Task = () => {
  const [isTaskOpen, setIsTaskOpen] = useState(true);
  const [taskList,setTaskList] = useState([]);
  const tasks=[{
    url:'Nikhil',
    task:"change the cloths",
    done: true,
    time: '12:20pm',

},{
    url:'Nikhil',
    task:"change the cloths",
    done: true,
    time: '12:20pm',

},{
    url:'Nikhil',
    task:"change the cloths",
    done: true,
    time: '12:20pm',

},{
    url:'Nikhil',
    task:"change the cloths",
    done: true,
    time: '12:20pm',

},]

  
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
        <TaskList tasks={tasks}/>
          :"name is sing"
        }
          
        </div>
    </div>
  ) 
};


export default Task;
