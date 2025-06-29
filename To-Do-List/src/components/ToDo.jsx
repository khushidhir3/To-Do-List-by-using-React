import React,{useEffect,useRef,useState} from 'react'
import bow from '../assets/bow.jpg'
import TodoItems from './Todoitems'
const ToDo = () => {
  const [todoList, setTodoList]= useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
  
   const inputRef = useRef();
   const add = () =>{
    const inputText = inputRef.current.value.trim();
    if(inputText===" "){
      return null;

    }
     const newTodo ={
      id: Date.now(),
      text: inputText,
      isComplete: false,
     }
     setTodoList((prev)=>[...prev,newTodo]);
     inputRef.current.value=" ";
   }
   const deleteTodo=(id)=>{
     setTodoList((prvTodos) => {
       return prvTodos.filter((todo) => todo.id !== id)
     })
    }
    const toggle= (id) => {
      setTodoList((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, isComplete: !todo.isComplete }
          }
          return todo
        })
      })
    }
    useEffect(() => {localStorage.setItem("todos",JSON.stringify(todoList));}, [todoList])

  
  return (
    <div className='bg-purple-200 place-self-center w-11/12 max-w-md flex flex-col p-8 min-h-[500px] rounded-xl shadow-lg '>
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8'src={bow} alt=" "/>
        <h1 className='text-3xl font-bold italic underline'>To-Do List</h1>
      </div>
   <div className='flex items-center my-7 bg-purple-100 rounded-full shadow-md'>
  <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2' type="text"
    placeholder='Add your task'/>
    <button onClick={add} className='border-none rounded-full bg-purple-300 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
</div>

<div>
  {todoList.map((item, index)=>{
    return <TodoItems key={index} text={item.text} id={item.id} 
    isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
  })}
 
</div>
</div>
  )
}


export default ToDo

