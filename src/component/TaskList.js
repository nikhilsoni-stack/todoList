import React from 'react';
import TaskSection from './TaskSection';
import * as styles from './TaskList.module.css';
const TaskList = ({ tasks,isDone}) => {
  return (
    <div className={styles.container} id="task-list">
      <div className={styles.flexContainer}>
        {tasks.map((task,index) => (
          <TaskSection
          done= {task.done}
          task={task.task}
          url ={task.url}
          time={task.time}
          taskId={index}
          isDone={isDone}
          />
        ))}
      </div>
    </div>
    
  );
};


export default TaskList;
