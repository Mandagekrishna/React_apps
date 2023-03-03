
import { useState } from 'react';
import Item_list from './Components/Item_list';
import New_task from './Components/New_task'
import Tasks from './Components/Tasks'


let Task_list = [
  {id:1,title:'meeting',priority:'high'},
  {id:2,title:'running',priority:'low'},
  {id:3,title:'reading',priority:'high'}

]



function App() {

  let [Tasksarr, updatetask] = useState(Task_list)

  let taskAdder = (newTask) => {
    console.log(newTask);
   // newTask = {...newTask};
    updatetask((prevTasks)=> {return([newTask,...prevTasks]);})
    console.log(Tasksarr);
    console.log(Tasksarr);

  }

  return (
    <div>
      <New_task onTaskadd={taskAdder}></New_task>   
      <Tasks tasks = {Tasksarr}></Tasks>  
     
    </div>
  );
}

export default App;
