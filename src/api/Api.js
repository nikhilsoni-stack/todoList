import axios from "axios";

export const getTasks = async () => {
  const data = await axios.get(
    "https://mmy-to-do-list.herokuapp.com/api/tasks"
  );
  return data.data;
};
export const updateTask = async (task) => {
  const result = await axios.patch(
    "https://mmy-to-do-list.herokuapp.com/api/tasks/" + task.id,
    task
  );
  const data = await axios.get(
    "https://mmy-to-do-list.herokuapp.com/api/tasks"
  );

  return data.data;
};

export const createTask = async (task) => {
  const result = await axios.post(
    "https://mmy-to-do-list.herokuapp.com/api/tasks",
    task
  );
  const data = await axios.get(
    "https://mmy-to-do-list.herokuapp.com/api/tasks/"
  );
  return data.data;
};

export const deletetask = async (taskId) => {
  const result = await axios.delete(
    "https://mmy-to-do-list.herokuapp.com/api/tasks/" + taskId
  );
  const data = await axios.get(
    "https://mmy-to-do-list.herokuapp.com/api/tasks/"
  );
  return data.data;
};
