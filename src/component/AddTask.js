import React from "react";
import styles from "./AddTask.module.css";
const AddTask = ({ addTask }) => {
  let task = React.createRef();
  let imagePath = React.createRef();

  const addToList = () => {
      if(task.current.value!=='')
      {
    const taskData = {};
    taskData.description = task.current.value;
    taskData.avatar_url = imagePath.current.value;
    taskData.completed_at=null;
    addTask(taskData);
      }
      else 
      {
          alert("Task field is required");
      }
  }
  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.formField}> Task</div>
        <input
          type="text"
          className={styles.inputText}
          ref={task}
        ></input>
        <div className={styles.formField}>Avatar</div>
        <input
          type="text"
          className={styles.inputText}
          ref={imagePath}
        ></input>
        <div className={styles.buttonContainer}>
          <button className={styles.addButton} onClick={() => addToList()}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddTask;
