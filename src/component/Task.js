import React, { useState, useEffect } from "react";
import Style from "./Task.module.css";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import { createTask, getTasks, updateTask, deletetask } from "../api/Api";
const Task = () => {
  const [isTaskOpen, setIsTaskOpen] = useState(true);
  const [taskList, setTaskList] = useState([]);
  const openAddTask = () => {
    setIsTaskOpen(false);
  };
  useEffect(() => {
    async function getData() {
      const data = await getTasks();
      setTaskList(data);
    }
    getData();
  }, []);
  const addTask = async (task) => {
    setIsTaskOpen(true);
    const data = await createTask(task);
    setTaskList(data);
  };
  const isDone = async (taskdata) => {
    let temp = taskdata;
    temp.isCompleted = true;
    const data = await update(temp);
  };

  const update = async (task) => {
    setIsTaskOpen(true);
    const data = await updateTask(task);
    setTaskList(data);
  };

  const deleteTask = async (taskId) => {
    setIsTaskOpen(true);
    const data = await deletetask(taskId);
    setTaskList(data);
  };

  return (
    <div className={Style.rootWrapper}>
      {isTaskOpen ? (
        <div className={Style.header}>
          <div className={Style.title}>Tasks</div>
          <div type="button" onClick={openAddTask} className={Style.addTask}>
            +
          </div>
        </div>
      ) : (
        <div className={Style.header}>
          <div className={Style.title}>AddTask</div>
          <div
            type="button"
            onClick={() => {
              setIsTaskOpen(true);
            }}
            className={Style.addTask}
          >
            {"<"}
          </div>
        </div>
      )}
      <div className={Style.container}>
        {isTaskOpen ? (
          <TaskList
            tasks={taskList}
            isDone={isDone}
            updateTask={update}
            deleteTask={deleteTask}
          />
        ) : (
          <AddTask addTask={addTask} />
        )}
      </div>
    </div>
  );
};

export default Task;
