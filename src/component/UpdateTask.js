import React from "react";
import styles from "./AddTask.module.css";
const UpdateTask = ({ updateTask, data, setOpen }) => {
  let task = React.createRef();

  const addToList = () => {
    if (task.current.value !== "") {
      const taskData = {};
      taskData.description = task.current.value;
      taskData.id = data.id;
      taskData.isCompleted = false;
      setOpen(true);
      updateTask(taskData);
    } else {
      alert("Task field is required");
    }
  };
  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.formField}> Task</div>
        <input type="text" className={styles.inputText} ref={task}></input>
        <div className={styles.buttonContainer}>
          <button className={styles.addButton} onClick={() => addToList()}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
export default UpdateTask;
