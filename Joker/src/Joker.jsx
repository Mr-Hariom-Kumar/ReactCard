import { useState,useEffect} from "react";

export default function Jokes(){
    const URL="https://official-joke-api.appspot.com/random_joke"
    const getNewJokes=async ()=>{
        let response=await fetch(URL);
        let jsonResponse=await response.json()
        console.log(jsonResponse);
        setJokes((curr)=>{
            return {...curr,setup:jsonResponse.setup,punchline:jsonResponse.punchline}
        })
    }
    let [Jokes,setJokes]=useState({})
    useEffect(()=>{
        async function getFirstJoke(){
            let response=await fetch(URL);
            let jsonResponse=await response.json();
            setJokes((curr)=>{
                return {...curr,setup:jsonResponse.setup,punchline:jsonResponse.punchline}
            },[])
        }
        getFirstJoke();
    },[])
    return (
        <div>
            <h2>Welcome to Joker.com</h2>
            <h4>{Jokes.setup}</h4>
            <h4>{Jokes.punchline}</h4>
            <button onClick={getNewJokes}>New Jokes</button>
        </div>
    )
}