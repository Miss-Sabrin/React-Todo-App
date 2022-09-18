import {FaPlusCircle} from "react-icons/fa"
function TodoInput({text,setText,handleSubmit}) {
  return (
    <form onSubmit={handleSubmit} > 
        <div className="input-group mb-3">
            <input
             type="name"
             name="text"
             value={text}
             onChange={(e)=>setText(e.target.value)}
             className=" form-control border-0 shadow-none"
             placeholder="add new task"
             autoFocus />

        
        <button className="input-group-text border-0 shadow-none btn brn-light">
            <FaPlusCircle className="  fs-3 text-primary     "/>
            
        </button>
        </div>
    </form>
  )
}

export default TodoInput