import axios from 'axios'
 
export const getTasks= async ()=>{
        const data = await axios.get("http://localhost:3000/tasks.json");
        return data.data;
}
export const updateTask= async(index)=>{
    
    const result = await axios.post('http://localhost:3000/tasks/'+index+'/complete');
    const data = await axios.get("http://localhost:3000/tasks.json");
    return data.data;
}
      
export const createTask= async(task)=>{
    const taskData={
        task:task,
    }
    const result=await axios.post('http://localhost:3000/tasks.json',taskData);
    if(result.data.status==="unprocessable_entity") alert("Ivalid Avatar URL");
    const data = await axios.get("http://localhost:3000/tasks.json");
    return data.data;
}
