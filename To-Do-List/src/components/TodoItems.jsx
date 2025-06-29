import React from'react'
import tick from '../assets/tick.jpeg'
import circle from '../assets/circle.jpg'
import dustbin from '../assets/dustbin.png'

const TodoItems = ({text,id,isComplete,deleteTodo,toggle}) => {
  return(
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete  ? tick : circle} alt=" " className='w-8'/>
            <p className={`text-black ml-4 text-[17px] decoration-black ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>
        <img onClick={()=>{deleteTodo(id)}} src={dustbin} alt="" className="w-3.5 cursor-pointer"/>
    </div>
  )
}
export default TodoItems