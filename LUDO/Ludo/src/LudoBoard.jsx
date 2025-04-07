import { useState } from "react"

export default function LudoBoard(){
    let [moves,setMoves]=useState({
        blue:0,
        yellow:0,
        green:0,
        red:0
    });
    let ActionBlue=()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves,blue:prevMoves.blue+1}
        })
        console.log(`btn clicked.moves=${moves.blue+1}`);   
    }
    let ActionYellow=()=>{
        console.log(`yellow moves=${moves.yellow+1}`);
        setMoves((prev)=>{
            return {...prev,yellow:prev.yellow+1}
        })
    }
    let ActionGreen=()=>{
        console.log(`green moves=${moves.green+1}`)
        setMoves((prev)=>{
            return {...prev,green:prev.green+1}
        })
    }
    let ActionRed=()=>{
        console.log(`red moves=${moves.red+1}`);
        setMoves((prev)=>{
            return {...prev,red:prev.red+1}
        })
    }
    return(
        <>
            <h4>Game Begins!</h4>
            <p>Blue moves={moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={ActionBlue}>+1</button>
            <p>Yellow moves={moves.yellow}</p>
            <button style={{backgroundColor:"yellow",color:"black"}} onClick={ActionYellow}>+1</button>
            <p>Green moves={moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={ActionGreen}>+1</button>
            <p>Red moves={moves.red}</p>
            <button style={{backgroundColor:"red"}} onClick={ActionRed}>+1</button>
        </>
    )
}