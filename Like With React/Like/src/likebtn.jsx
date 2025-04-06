import { useState } from "react"
export default function Like(){
    let [isLiked,setLiked]=useState(false);
    let [count,setCount]=useState(0)
    function liked(){
        isLiked==true?setCount(count+1):setCount(count);
        setLiked(!isLiked);
    }
    return (
        <>
            <h1>🔫🔫HIT YOUR LIKE THERE 👇</h1>
            <p>count={count}</p>
            <p onClick={liked} >{isLiked?<i className="fa-regular fa-heart" ></i>:<i className="fa-solid fa-heart" ></i>}</p>
        </>
        
    )
}