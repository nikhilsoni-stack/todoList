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
  useEffect(()=>{
    async function getData() {
      // const data = await getTasks();
      setTaskList([]) // data;
    }
    getData();
  },[]);
  const addTask = async (task) =>{
    const temp=Object.assign([],taskList);
    temp[temp.length]=task;
    // const data = await createTask(task);
    setTaskList(temp); // user data here
    setIsTaskOpen(true);
  }
  const isDone =(index) => {
    const temp=Object.assign([],taskList);
    temp[index].time=`${new Date().getHours()} : ${new Date().getMinutes()} `;
    temp[index].done=true;
    // const data = await updateTask(index);
    setTaskList(temp);  //set data here

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
