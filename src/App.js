import './App.css';
import { useState } from 'react';
import {Task} from './Task';


function App() {
   const [todo,setTodo]=useState([]);
   const [newTask, setNewTask]=useState("");

   const getData =(event)=>{
     setNewTask(event.target.value)
   }

   const addTask=()=>{
    const task={
      id:todo.length===0?1: todo[todo.length-1].id+1,
      taskName:newTask
    }
     setTodo([...todo,task]);  
     setNewTask("");
   }
   

   
   const delTask=(id)=>{
    setTodo(todo.filter((task)=> task.id !== id));
        
   }
  return (
    <div className="App">
     <div className='top'>
     <h1>ToDo List</h1>
     <input onChange={getData} value={newTask} />
     <button onClick={()=>
      addTask()
     } className='addbtn'>Add Task</button>
     </div>
     <div className='bottom'>
     {todo.map((task) =>
     {
      return <Task 
      taskName={task.taskName}
      id={task.id}
      delTask={delTask}/>  
     })}
     </div>
     </div>
  );
}

export default App;
