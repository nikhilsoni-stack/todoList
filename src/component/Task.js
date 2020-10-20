import React, { useState, useEffect } from 'react';
import Style from './Task.module.css';
import TaskList from './TaskList';
import AddTask from './AddTask';
import {createTask,getTasks,updateTask } from '../api/Api'
const Task = () => {
  const [isTaskOpen, setIsTaskOpen] = useState(true);
  const [taskList,setTaskList] = useState([]);
  const openAddTask = () => {
    setIsTaskOpen(false); 
  };
  const addTask = async (task) =>{
    setIsTaskOpen(true);
    const data = Object.assign([],taskList);
    data.push(task);
    setTaskList(data);
    
  }
  const isDone = async(index) => {
    const data = Object.assign([],taskList);
    data[index].completed_at=new Date();
    setTaskList(data);  

  }
  
  return  (
    <div className={Style.rootWrapper}>
      {isTaskOpen ? <div className={Style.header}>
        <div className={Style.title}>
        Tasks
        </div>
        <div type="button" onClick={openAddTask} className={Style.addTask}>
          +
        </div>
      </div>
      :
      <div className={Style.header}>
        <div className={Style.title}>
        AddTask
        </div>
        <div type="button" onClick={() => {setIsTaskOpen(true)}} className={Style.addTask}>
          {'<'}
        </div>
        
      </div>}
      <div className={Style.container}>
        {isTaskOpen ?  
        <TaskList tasks={taskList} isDone={isDone}/>
          :
          <AddTask addTask={addTask}/>
        }
          
        </div>
    </div>
  ) 
};


export default Task;
