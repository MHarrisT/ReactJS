import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let nums = "0123456789"
    let spChars = "!@#$%^&*__+=[]{}()~`/?|<>,."

    if (numberAllowed) str += nums
    if (charAllowed) str += spChars

    for (let i=1; i<=length; i++){
      let char = Math.floor((Math.random() * str.length + 1))
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])
    // useCallback is a react hook that lets you cache a function definition between rerenders
    // place this function in cache and then react uses it accordingly
    // dependencies are the datatypes+functions which will be used in this callback as they are dependent on it

  useEffect(() => { // for running the generator
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  // useEffect is a hook that lets you synchronize a component with an external system

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,9) // defines a range of characters to copy
    window.navigator.clipboard.writeText(password)
  },
[password])

  return (
    <div className="min-h-screen bg-slate-900 w-full flex flex-col items-center pt-20 px-4">
      <div className="w-full max-w-lg shadow-2xl rounded-2xl px-8 py-8 bg-slate-800 border border-slate-700">
        <h1 className="text-white text-center text-2xl font-bold mb-6 tracking-wide">Password Generator</h1>
        
        <div className="flex shadow-inner rounded-xl overflow-hidden mb-8 border border-slate-600 focus-within:ring-2 focus-within:ring-emerald-500 transition-all">
          <input 
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 bg-slate-900 text-emerald-400 font-mono text-xl tracking-wider placeholder-slate-500 selection:bg-emerald-500/30"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-600 text-white px-6 py-3 font-semibold shrink-0 hover:bg-blue-500 active:bg-blue-700 transition-colors"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-y-4 text-sm font-medium text-orange-400">
          <div className="flex items-center gap-x-3">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer accent-orange-500 w-24 h-2 bg-slate-700 rounded-lg appearance-none"
              onChange={(e)=> {setLength(e.target.value)}}
            />
            <label className="min-w-[5rem]">Length: {length}</label>
          </div>
          
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              className="cursor-pointer accent-orange-500 w-4 h-4 rounded border-slate-600 bg-slate-700"
              onChange={ () => {
                setNumberAllowed((prev) => !(prev))
              } }
            />
            <label htmlFor="numberInput" className="cursor-pointer select-none hover:text-orange-300 transition-colors">Numbers</label>
          </div>
          
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              className="cursor-pointer accent-orange-500 w-4 h-4 rounded border-slate-600 bg-slate-700"
              onChange={ () => {
                setCharAllowed((prev) => !(prev))
              } }
            />
            <label htmlFor="charInput" className="cursor-pointer select-none hover:text-orange-300 transition-colors">Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
