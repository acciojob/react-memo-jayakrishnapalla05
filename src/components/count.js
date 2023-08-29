import React,{useState} from "react";



const count=()=>{
  const [count,setcount]=useState(0);




    return (
        <div>
            <p id="incr-cnt">Count:{count}</p>
            <button  id="incr-btn" onClick={()=>setcount(count+1)}>0</button>
            <br/>
            <h2>Expensive Calculation</h2>
            <p id="calc">{1000000000+count}</p>
            <hr/>
            <hr/>
            <hr/>
        
        </div>
    )
}


export default count;
