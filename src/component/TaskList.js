import React from 'react';
import TaskSection from './TaskSection';
import * as styles from './TaskList.module.css';
const TaskList = ({ tasks,isDone}) => {
  return (
    <div className={styles.container} id="task-list">
      <div className={styles.flexContainer}>
        {tasks.map((task,index) => (
          <TaskSection
          task={task.description}
          url ={task.avatar_url}
          time={task.completed_at}
          taskId={task.id}
          done = {task.completed_at!==null}
          isDone={isDone}
          />
        ))}
      </div>
    </div>
    
  );
};


export default TaskList;
