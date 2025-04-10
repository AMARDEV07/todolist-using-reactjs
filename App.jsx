import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';
//uuid unique id create

function App() {
  const [task, settask] = useState(""); //task user give
  const [todos, settodos] = useState([]); //aray which store value of todo task
const [finsihedTask, setfinsihedTask] = useState(true)

 useEffect(() => {
   let todoString=localStorage.getItem("todos")
   if(todoString){
    let todos= JSON.parse(localStorage.getItem("todos"))
    settodos(todos)
   }
  

 }, [])
 //SAVE TODS
const savaTols=(params)=>{
  localStorage.setItem("todos",JSON.stringify(todos))

}

 


  const Handler = (e) => {
    settask(e.target.value); // input handler  value target kra h jo user sa input hogi
  };
  const addHandel = () => {
    if (task.trim() === "") return; //agr white space huwa toh una trim kr data ..
    settodos([...todos, { id:uuidv4(), task, isCompleted: false }]); //jo array h na use copy kraga or jo users sa task aya usa bhi copy kranaga mens old array and new user input
    settask(""); //ab hmna copy toh kr liya ab user inpout ko wapis " "kr do
    savaTols()
  };

  const deleteHandel = (e,id) => {
    confirm("are u really want delete this task"); 
     let newTodos=todos.filter(items=>{//filtwer tods
       return items.id!==id;//item.id !== id means: "Keep all tasks except the one whose id matches."
     })
     settodos(newTodos)
     savaTols()
    
    
  };


const checkHandler=(e)=>{
  const id=e.target.name;//name ko taget keya but mane ma ky h tak li id ha 
 let index=todos.findIndex(items=>{//tods array ha toh index find kro agr itme ki id === hogi id sa
  return items.id===id;
 }) 
 
 let newTodos=[...todos];//new todo bnao or usa copy kro all tods array sa
 newTodos[index].isCompleted=!newTodos[index].isCompleted;
 settodos(newTodos)
 savaTols()

  

}


  const editHandel = (e,id) => {
   let taskupdate=todos.filter(items=>items.id===id)//ist filter out which task id we seleted
   settask(taskupdate[0].task) //tasl ko set kr diya input pa or delete wla chla diya jisa wo delete bhui ho jata
   let newTodos=todos.filter(items=>{//filtwer tods
    return items.id!==id;
  })
  settodos(newTodos)
  savaTols()
  
  };
 
  const toggleFinsihed=(parms)=>{
    (setfinsihedTask(!finsihedTask))



  }

  return (
    <>
    <Navbar/>

      <div className="container mx-auto my-5 rounded-xl p-5  bg-violet-100 min-h-[80vh] ">
        <h2 className="text-xl font-bold ">add-todo</h2>
{/* //input  */}
        <input value={task} onChange={Handler} type="text "placeholder="enter today task" className="bg-white w-80 border-[2px] border-black-500 rounded-[4px] p-1"/>
        {/* add button  */}
       <button onClick={addHandel}className="bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-2" >add</button>
        <input  type="checkbox" onChange={toggleFinsihed} checked={finsihedTask} />show finsihed
        <div className="add-todo">
          <h2 className="text-lg font-bold">your todo</h2>
        </div>
        <div className="todos">

          {todos.length===0 && <div> no task for display</div>}
          
          {todos.map((items) => {
            return ( finsihedTask||!items.isCompleted) &&
              <div key={items.id} className="todo flex w-1/4 justify-between mt-2">
                {/* unique key pass */}

                <input onChange={checkHandler} type="checkbox" checked={items.isCompleted} name={items.id} id="" />  
                {/* checkbox */}
                <div className={items.isCompleted ? "line-through" : ""}> {items.task}</div> 
                {/* data div  */}
                <div className="buttons">
                  <button onClick={ (e)=>{editHandel(e,items.id)}} className="bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-2">edit</button>
                  <button onClick={(e)=>{deleteHandel(e,items.id)}} className="bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-2" >delete </button>
                  {/* //passing itmes.id or e for trageting */}
                </div>
              </div>
            
          })}
        </div>
      </div>
    </>
  );
}

export default App;
