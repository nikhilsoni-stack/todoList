import React from "react";
import TaskSection from "./TaskSection";
import * as styles from "./TaskList.module.css";
const TaskList = ({ tasks, isDone, updateTask, deleteTask }) => {
  return (
    <div className={styles.container} id="task-list">
      <div className={styles.flexContainer}>
        {tasks.map((task, index) => (
          <TaskSection
            task={task.description}
            taskId={task.id}
            done={task.isCompleted}
            isDone={isDone}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
