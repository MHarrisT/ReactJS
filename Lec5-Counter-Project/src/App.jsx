import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // let counter = 10
  let [counter, setCounter] = useState(1)
  const addValue = () => {
    // counter = counter + 1 // didnt update counter value on react but updates on console,
    // the problem is in UI updation
    // react provides methods called hooks
    
    // usestate is responsible for changing state in Ui
    setCounter(counter + 1)
  }
  
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>My Counter project</h1>
      <h2>Counter Value: {counter}</h2>
      <button 
        onClick = {addValue}>Add value</button>
      <br />
      <button
        onClick = {removeValue}>Remove Value</button>
    </>
  )
}

export default App
