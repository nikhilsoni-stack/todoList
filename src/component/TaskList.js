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
        {/* {tasks.length===0 ?
        <div>Task List is Empty</div>:''} */}
      </div>
    </div>
    
  );
};


export default TaskList;
