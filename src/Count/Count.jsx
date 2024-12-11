import React,{useState} from "react";
import "./Count.css";

const Count=()=>{
    const [count,setCount]=useState(0);
    const decrement=()=>setCount((count)=>count-1);
    const increment=()=>setCount((count)=>count+1);
    return(
        <div className="count">
            <button  onClick={decrement}>-</button>
            <div>{count}</div>
            <button onClick={increment}>+</button>
        </div>
    );
}
export default Count;