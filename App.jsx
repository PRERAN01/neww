import Comp1 from "./Comp1"
import React,{useState} from "react"
import Comp2 from "./Comp2"
function App() {
  const [pressed,setpressed]=useState(false)
  function toggle(){
    setpressed(!pressed)
  }
  return (
    <>
    
    {pressed?<Comp2/>:<Comp1 toggle={toggle}/>}
    </>
  )
}
export default App
