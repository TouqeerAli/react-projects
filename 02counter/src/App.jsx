import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// let counter = 5

function App() {
  
  let [counter, setCounter] =  useState(5)

  
const addValue = () => {
  counter =  counter +1
  setCounter(counter)
  console.log("Added Counter = ",counter)
}

const removeValue = () =>{
  if(counter>=1){
    counter = counter - 1
  setCounter(counter)
  console.log("Removed Counter = ",counter)
  }
  
}


  return (
    <>
    <h1>Testing Hooks</h1>
    <h2>counter {counter}</h2>
    <br/>
    <button onClick={addValue}>Increase counter</button>
    <button onClick={removeValue}>Decrease counter</button>
    </>
  )
}

export default App
