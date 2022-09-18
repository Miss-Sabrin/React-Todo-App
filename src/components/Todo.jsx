import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
function Todo() {

    const[text, setText] =useState(""); 
    const[todo, setTodo] =useState([]);
    const[error, setError]=useState('');
    const[success, setSuccess] =useState('');
    const[todoUpdate, setTodoUpdate] =useState({});


    const handleDelete=_id=>{
        const newTodo=todo.filter( t=> t._id !== _id)
        setTodo(newTodo);
        setSuccess('task deleted successfully')
        setTimeout(()=>{
            setSuccess('')
        },5000)
    }


    const handleComplete =(item)=>{
        const newTodo=todo.filter((t)=>t._id !== item._id)
        newTodo.push({_id:item._id,text:item.text,completed:'true'})
        setTodo(newTodo)
        setSuccess('task compledted successfully')
        setTimeout(()=>{
            setSuccess('')
        },5000)

    }
        

    const handleUpdate=(item)=>{
        setText(item.text)
        setTodoUpdate(item)
    }
    


    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim() ===''){
            return setError('todo is required');
        }
            //get old filtter todo
            if(todoUpdate && todoUpdate._id){
                const getFilterTodo=todo.filter(old=>old._id !=todoUpdate._id);
                //add new updaets todoUpdate

                getFilterTodo.unshift({
                    _id:todoUpdate._id,
                    text,completed: todoUpdate.completed,
                })
                setTodo(getFilterTodo);
                setSuccess(' task updated successfully');
                setTimeout(()=>{
                setSuccess('')
                },5000)
                setText('')
                setTodoUpdate({})
            
        }else{
            todo.unshift({_id: Date.now() ,text,completed:false} )
            setTodo(todo);
            setText('')
            setError('');
            setSuccess(' New text is successfully');
            setTimeout(()=>{
                setSuccess('')
            },5000)
        }
       


    }
     
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 text-light">
        <div className="row">
            <div className="bg-dark text-light shadow-lg p-5">
                <div className="col-lg-8 w-100 col-md-8 col-sm-10 col-12">
                    <div className="mb-3">
                        <h3 className="display-6 text-center">Todo List Manager App</h3>
                        <hr />
                        <div className="text-danger text-center fw-lighter">
                           {error}

                        </div>
                        <div className="text-success  
                      text-center fw-lighter">
                       {success}
 </div>

                    </div>
                    <TodoInput text={text} setText={setText} handleSubmit={handleSubmit} /> 
 
                </div>
                <TodoList todo={todo}    handleDelete={handleDelete} 
                handleComplete={handleComplete}
                handleUpdate={handleUpdate}
                /> 

            </div>
        </div>
    
       
    </div>
  )
}

export default Todo