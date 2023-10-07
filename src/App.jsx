import { useState } from "react"
import NavBar from "./NavBar"

function App({count, handleDecrement, handleIncrement}) {
const [ count, setCount] =useState (0)

const handleIncrement =()=> {
  setCount(count +1)
}

const handleDecrement =()=> {
  setCount(count -1)
}


  return (

<div>
  <NavBar/>
 const handle
    <p className=" flex items-center justify-center box w-20 h-20 bg-orange-500"> {count}</p>
   
      <div className="flex gap-4"> </div>
      
    <button onClick={handleDecrement} className="w-60 h-60 bg-sky-500/100"> - </button>
    <button onClick={handleIncrement} className="w-60 h-60 bg-amber-400">  + </button>
      </div>
      
  )
}
return (
  <div> 
      <count={count} handleDecrement={handleDecrement} handleIncrement={handleIncrement}/>
  </div>
)
export default App 




condition? true: false
count > 5? 'green': 'red'

