import React, { useState } from 'react'


function Counter() {
    const[counter,setCounter]=useState(0)

    function handleincrement(){
        setCounter(counter+1)
    }
    function handledecrement(){
        setCounter(counter-1)
    }
    function handlereset(){
        setCounter(0)
    }
  return (
    <div>
      <input type="text" value={counter}/>
                <button onClick={handleincrement}>+</button>
                <button onClick={handledecrement} >-</button>
                <button onClick={handlereset}>Reset</button>

    </div>
  )
}

export default Counter
