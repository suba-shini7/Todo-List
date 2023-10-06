 export const Task=(props)=>{
    return (
        <div>
      <li>{props.taskName}</li>
      <button onClick={()=>props.delTask(props.id)}>x</button>
      </div>); 
      
};