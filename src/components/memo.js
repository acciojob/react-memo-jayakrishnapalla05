import React,{useState} from "react";



const memo=()=>{

    const [memo,setMemo]=useState([]);
    const [skill,setSkill]=useState("");

    return (
        <div>
            <h2>React.Memo</h2>
           
            <input id="skill-input" type="text" onChange={(e)=>setSkill(e.target.value)}></input>
            <button type="button" id="skill-btn" onClick={()=>setMemo([...memo,skill])}>Add Skill</button>
            <br/>
            {
                memo && <ul>
                    {
                        memo.map(memo=>{
                            <li id={`item-${memo}`}>{memo}</li>
                        })
                    }
                </ul>
            }
      <br/>
        </div>
    )
}


export default memo;