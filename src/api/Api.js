import axios from "axios";

export const getTasks = async () => {
  let config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, Content-Length, X-Requested-With",
    },
  };
  const data = await axios.get(
    "https://git.heroku.com/mmy-to-do-list.git/api/tasks",
    config
  );
  return data.data;
};
export const updateTask = async (task) => {
  const result = await axios.patch(
    "https://git.heroku.com/mmy-to-do-list.git/api/tasks/" + task.id,
    task
  );
  const data = await axios.get(
    "https://git.heroku.com/mmy-to-do-list.git/api/tasks"
  );

  return data.data;
};

export const createTask = async (task) => {
  const result = await axios.post(
    "https://mmy-to-do-list.herokuapp.com/api/tasks/api/tasks",
    task
  );
  const data = await axios.get(
    "https://mmy-to-do-list.herokuapp.com/api/tasks/api/tasks"
  );
  return data.data;
};

export const deletetask = async (taskId) => {
  const result = await axios.delete(
    "https://mmy-to-do-list.herokuapp.com/api/tasks/api/tasks/" + taskId
  );
  const data = await axios.get(
    "https://mmy-to-do-list.herokuapp.com/api/tasks/api/tasks"
  );
  return data.data;
};
