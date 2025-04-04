import { useState } from "react";
export default function Counter(){
let styles={
    marginLeft:"15px",
    padding:"0 19px 0 19px",
    height:"43px",
}
let [count,setCount]=useState(0);

    function inCount(){
        setCount(count+1);
        console.log(count);
    }
    function clear(){
        setCount(0);
    }
    return(
        <div>
            <h1>WELCOME TO CLICKER WARRIOR</h1>
            <p><b>Count={count}</b></p>
            <button onClick={inCount}>Click Me</button>
            <button onClick={clear} style={styles}>Clear</button>
        </div>
    )
}