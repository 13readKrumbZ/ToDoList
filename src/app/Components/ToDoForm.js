import { useState } from "react";




export function ToDoForm({get_Todolist}){
    
    const [todolist, setTodolist] = useState([]);
    const [todo, setTodo] = useState("");


    const handleSubmit = e => {
        e.preventDefault();
        get_Todolist(todolist);
        setTodo("");
        console.log(`${todo} hi`);
    }

    
        
      function addtodo(){
    
        setTodolist(todolist =>[todo]);
           
      };
    
    

    return (<form className="form" onSubmit={handleSubmit}>
        <input id="input" type="text" className="note_input" placeholder="what do we have to do today?"
        value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button id="subbtn" className="btn" onClick={addtodo} type="submit">Add Note</button>
        
        
        
    </form>)
}