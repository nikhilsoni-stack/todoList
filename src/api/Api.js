import axios from "axios";

export const getTasks = async () => {
  const data = await axios.get("http://localhost:3000/api/tasks");
  return data.data;
};
export const updateTask = async (task) => {
  const result = await axios.patch(
    "http://localhost:3000/api/tasks/" + task.id,
    task
  );
  const data = await axios.get("http://localhost:3000/api/tasks");

  return data.data;
};

export const createTask = async (task) => {
  const result = await axios.post("http://localhost:3000/api/tasks", task);
  const data = await axios.get("http://localhost:3000/api/tasks");
  return data.data;
};

export const deletetask = async (taskId) => {
  const result = await axios.delete(
    "http://localhost:3000/api/tasks/" + taskId
  );
  const data = await axios.get("http://localhost:3000/api/tasks");
  return data.data;
};
