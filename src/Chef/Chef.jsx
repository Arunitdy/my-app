import React,{useState} from "react";
import "./Chef.css";
 const Chef=()=>{
    const[inputValue,setinputValue]=useState("");
    const[list,setlist]=useState([""]);
    
    const handleSearch=(event)=>{
        event.preventDefault();
        console.log("handlesearch");

        if(inputValue.trim()){
            setlist((preList)=>[...preList,inputValue]);
        }
        setinputValue("");
        console.log(list);
    }
    return(
    <div className="Chef">
        <div className="navbar">
            <img className="logo" alt="Chef logo" src="https://w7.pngwing.com/pngs/664/579/png-transparent-chef-holding-tray-with-food-illustration-chef-restaurant-menu-waiter-beauty-chef-food-hand-logo-thumbnail.png"/>
            <h1>Chef Cloude</h1>
        </div>
        <form className="inputButton" onSubmit={handleSearch}>
            <input 
            placeholder="eg:orange" 
            type="text" 
            className="ingredient"
            value={inputValue}
            onChange={(e)=>setinputValue(e.target.value)}
            required
            />
            <button type="submit" >+Add ingredient</button>
        </form>
        <h2>Ingredients:</h2>
        <ul>
            {list.map((item,index)=>{
                <li key={index}>{item}</li>
            })}
        </ul>

    </div>);
 }
 export default Chef;