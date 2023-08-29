import React from "react";
import count from "./count"
import todo from "./todo";
import memo from "./memo";


const App=()=>{


    return (
        <div id="main">
            <h1>React.useMemo</h1>
            <todo/>
            <count/>
            <memo/>
        </div>
    )
}

export default App;

