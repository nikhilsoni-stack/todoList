import React, { useEffect} from 'react';
import * as styles from './TaskList.module.css';
const TaskList = ({ tasks}) => {
  return (
    <div className={styles.container} id="task-list">
      <div className={styles.flexContainer}>
        {tasks.map((task) => (
          <div>{task.task}</div>
        ))}
      </div>
    </div>
  );
};


export default TaskList;
