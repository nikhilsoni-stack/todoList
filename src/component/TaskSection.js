import React from 'react';
import styles from './TaskSection.module.css';
import avtar from './avtar.png';

const TaskSection = ({ isDone, done, task ,time,taskId, url}) => 
{
return (
  <div className={styles.taskList}>
    <div className={styles.taskSubheading}>
      <div className={styles.taskSubheading}>
      <img src={url || avtar} className={styles.userImage}/>
      </div>
      <div className={styles.taskListPara}>
        <div>{task}</div>
        </div>
      {done?
      <span className={styles.taskListSpan}>{new Date(time).getHours()+":"+new Date(time).getMinutes()}</span>
      :
      <div className={styles.checkBoxContainer}>
        <input
          type="checkbox"
          className={styles.checkBox}
          onChange={() => isDone(taskId)}
        />
      </div>
      }
    </div>
  </div>
);
}
export default TaskSection;
