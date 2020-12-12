import React, { useEffect, useState } from "react";
import styles from "./TaskSection.module.css";
import avtar from "./avtar.png";
import deleteIcon from "./delete.png";
import UpdateTask from "./UpdateTask";
const TaskSection = ({
  isDone,
  done,
  task,
  deleteTask,
  taskId,
  url,
  updateTask,
}) => {
  const [isOpen, setOpen] = useState(true);
  const data = {
    id: taskId,
    isCompleted: done,
    description: task,
  };
  return (
    <div>
      {isOpen ? (
        <div className={styles.taskList}>
          <div className={styles.taskSubheading}>
            <div className={styles.taskSubheading}>
              <img src={url || avtar} className={styles.userImage} />
            </div>
            <div className={styles.taskListPara}>
              <div onClick={() => setOpen(false)}>{task}</div>
            </div>
            <div className={styles.checkBoxContainer}>
              <input
                type="checkbox"
                className={styles.checkBox}
                onChange={() => isDone(data)}
              />
            </div>
            <div
              className={styles.checkBoxContainer}
              onClick={() => deleteTask(taskId)}
            >
              <img src={deleteIcon} className={styles.deleteIcon} />
            </div>
          </div>
        </div>
      ) : (
        <UpdateTask updateTask={updateTask} data={data} setOpen={setOpen} />
      )}
    </div>
  );
};
export default TaskSection;
