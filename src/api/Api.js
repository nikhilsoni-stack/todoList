import axios from 'axios'
 
export const getTasks= async ()=>{
        const data = await axios.get("/tasks");
        return data;
}
export const updateTask= async(index)=>{
    const data = axios.post('/tasks/:'+index+'complete');
    return data;
}
      
export const createTask= async(task)=>{
    const data = axios.post('/tasks',task);
    return data;
}
