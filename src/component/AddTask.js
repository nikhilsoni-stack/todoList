import React from "react";
import styles from "./AddTask.module.css";
const AddTask = ({ addTask }) => {
  let task = React.createRef();
  let imagePath = React.createRef();

  const addToList = () => {
      if(task.current.value!=='' && imagePath.current.value!=='')
      {
    const taskData = {};
    taskData.task = task.current.value;
    taskData.url = imagePath.current.value;
    taskData.time=`${new Date().getHours()} : ${new Date().getMinutes()} `;
    taskData.done = false
    taskData.id='';
    addTask(taskData);
      }
      else 
      {
          alert("All fields are required");
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
