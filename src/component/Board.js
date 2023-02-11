import React, { useEffect } from 'react'
import Box from './Box'
import { image,image1 } from '../asset'
import { useState } from 'react'
const initial=["","","","","","","","",""]
const nextC=[""]
 

const Board = () => {
    const [gameState,updateGameState]=useState(initial);
    const [nextChance,updateNaetChance]=useState(nextC)
    const [xChance,updateXChance]=useState(false)
    const [score1,updateScore1]=useState(0)
    const [score2,updateScore2]=useState(0)

    const onBoxClick=(index)=>{
        let strings=Array.from(gameState)
       
        strings[index]=xChance ? "X" : "O"
        
        updateGameState(strings);
       
        updateXChance(!xChance);
    }

useEffect(()=>{
  
  const winner=calculateWinner();
  if(winner){
    if(`${winner}`=='X'){
      alert('winner is Player1')
   updateScore1(score1+1)
    }else{
      alert('winner is Player2')
      updateScore2(score2+1)
    }
    updateGameState(initial)
  }
},[gameState])
/////////////////////////////////////////////


// alert(`ta da ! ${winner} haswon the Game`)
// updateGameState(initial)

useEffect(()=>{
  
  
  let strings1=Array.from(nextChance)
  strings1[0]=xChance ? "X" : " O"
    updateNaetChance(strings1)
  
},[gameState])
//////////////////////////////////////////
function playerChose(b) {
 
 
  updateNaetChance(b)
  updateGameState(initial )


  
}
////////////////////////////////////////


  const  calculateWinner=()=> {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
          return gameState[a];
        }
      }
      return null;
    }
  return (
   <div>
    <div className=' flex flex-row'>
      <div className='flex justify-center   w-1/2' >Player1: <div className='text-blue-400'>{score1}</div></div>
      <div className='flex  pl-10   w-1/2'  >Player2:<div className='text-blue-400'>{score2}</div></div>
    </div>
    <div  className='flex justify-center pt-10  w-full text-[30px] '> Next Turn :{" "}
     <div className='text-green-500'> { nextChance}
    </div>
    </div>

    <div  className='flex justify-center pt-10  w-full text-[30px] '> Chose Player :    <span>  </span>
     <div > 
 
     <button className='text-green-500' id="X" onClick={()=>playerChose("x")}>X</button>
     <span> </span>
     <button className='text-black-500' id="O" onClick={()=>playerChose("O")}>O</button>
    </div>
    </div>

     <div className='flex mt-20 items-center  flex-col border-[0px]'>
  
  <div className='flex' >
  <Box state={gameState[0]} onClick={()=>onBoxClick(0)}/>
  <Box state={gameState[1]} onClick={()=>onBoxClick(1)}/>
  <Box state={gameState[2]} onClick={()=>onBoxClick(2)}/>
  </div>
   <div className='flex'>
   <Box state={gameState[3]} onClick={()=>onBoxClick(3)}/>
   <Box state={gameState[4]} onClick={()=>onBoxClick(4)}/>
   <Box state={gameState[5]} onClick={()=>onBoxClick(5)}/>
   </div>
   <div className='flex'>
   <Box state={gameState[6]} onClick={()=>onBoxClick(6)}/>
   <Box state={gameState[7]} onClick={()=>onBoxClick(7)}/>
   <Box state={gameState[8]} onClick={()=>onBoxClick(8)}/>
   </div>

   <button className='bg-black mt-10 text-white pr-2 pl-2' type='submit' onClick={()=>(updateGameState(initial ))}>clear</button>

   </div>
 <div className=' flex justify-center pt-10  w-full text-[40px] '> <img src={image1} className=' w-[60px] h-[60px] rounded-full bg-gray-400' />   _   Kuntal Ghosh</div>
   </div>
  )
}

export default Board
