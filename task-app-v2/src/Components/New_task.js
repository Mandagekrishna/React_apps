import React from "react";
import {useState} from "react"


function New_task(props){
    const [enteredid, idUpdate] = useState();
    const [enteredtitle, titleUpdate] = useState('');
    const [enteredpriority, priorityUpdate] = useState('');

   const idHandler = (e) => {
    idUpdate(e.target.value)
   }

   const titleHandler = (e) => {
    titleUpdate(e.target.value)
   }

  const priorityHandler = (e) => {
    priorityUpdate(e.target.value)
   }

const submitHandler = (e) =>{
    e.preventDefault();
   const task_data ={
    id:enteredid,
    title:enteredtitle,
    priority:enteredpriority
   };

   props.onTaskadd(task_data);      //function from app.js is called
   idUpdate('')
   titleUpdate('')
   priorityUpdate('')

   


}

    return(
    <form onSubmit={submitHandler}>
        <label>ID : </label> 
    <input type='text' onChange={idHandler}></input> <br></br>
    <label>Title : </label>
    <input type='text' onChange={titleHandler}></input>  <br></br>
    <label>Priority : </label>
    <input type='text' onChange={priorityHandler}></input>  <br></br>
    <button type='submit'>Submit</button>
    </form>


    );
}

export default New_task;