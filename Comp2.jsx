import Total from "./Total"
import Number from "./Number"
import Roll from "./Roll"
import Rules from "./Rules";
import React,{useState} from "react";
function Comp2(){
    const [score,setscore]=useState(0)
    const [selectedNum, setSelectedNum] = useState(null);
    const [rando,setrando]=useState(1)
    const [error,seterror]=useState()
    const [prsd,setprsd]=useState(false)
    function reset(){
        setscore(0)
    }
    function rules(){
        setprsd(!prsd)
    }
    function generaterandom(max,min){
        return Math.floor(Math.random()*(max-min)+min)
    }
    function sound(){
        const audio=new Audio("/images/sound.mp3")
        if(selectedNum!==null){
            audio.play()
        }
    }
    function handeldice(){
        if(!selectedNum){
            seterror("you have not selected any number")
            return;
        }
        seterror("")
        const randum=generaterandom(1,7)
        setrando(randum)
        if(selectedNum===randum)
        {
            setscore((prev)=>prev+randum)
        }
        else{
            setscore((prev)=>prev-2)
        }
        setSelectedNum(undefined)
    }

  return <div>
      <div className="main3">
        <Total score={score}></Total>
        <Number selectedNum={selectedNum} setSelectedNum={setSelectedNum} error={error}></Number>
      </div>
      <hr />
      <Roll rando={rando} handeldice={handeldice} sound={sound}></Roll>
      <div className="main4">
        <button onClick={reset} className="reset">RESET SCORE</button>
        <button onClick={rules} className="show">SHOW RULESS</button>
      </div>
      {prsd&&<Rules/>}
  </div>
}
export default Comp2