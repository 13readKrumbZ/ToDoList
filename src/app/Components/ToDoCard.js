import { ToDoForm } from "./ToDoForm"
import { Todo } from "./ToDoTask"; 
import React, { useState } from "react"


export function ToDoCard(){

  
  const [list, setList] = useState([]);

  function get_Todolist(todolist){

    setList(list => [...list,todolist]);
    console.log(`${list} hello to you`);
    

  }

  function deleteTask(index){
    const delList = list.filter((_,idx) => idx !== index)
    setList(delList);

  };
   
   
  

    return (
        <>
        <div className="card">
          <ol className="card">{list.map((task, index)=> 
          <li className="todocell"><li className="todo" key={index}><span>{task}</span>
          </li><button className="tdbtn" onClick={() => deleteTask(index)}>Delete</button></li>
        )}</ol>
          <ToDoForm get_Todolist={get_Todolist}/>
        </div>
        </>
      )
}