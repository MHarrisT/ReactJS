import { useState } from 'react'

function App() {
  const [color, setColor] = useState("bg-slate-800")

  return (
    <div className={`w-full h-screen duration-300 flex flex-col justify-center items-center ${color}`}>
      <h1 className="text-5xl font-extrabold text-white mb-8 drop-shadow-xl tracking-tight text-center px-4">
        Color Changer
      </h1>
      
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white dark:bg-gray-900 px-4 py-3 rounded-3xl border border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setColor("bg-red-500")}
            className="outline-none px-6 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95"
            style={{backgroundColor: "#ef4444"}}
          >Red</button>
          
          <button
            onClick={() => setColor("bg-green-500")}
            className="outline-none px-6 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95"
            style={{backgroundColor: "#22c55e"}}
          >Green</button>
          
          <button
            onClick={() => setColor("bg-blue-500")}
            className="outline-none px-6 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95"
            style={{backgroundColor: "#3b82f6"}}
          >Blue</button>
          
          <button
            onClick={() => setColor("bg-purple-500")}
            className="outline-none px-6 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95"
            style={{backgroundColor: "#a855f7"}}
          >Purple</button>

          <button
            onClick={() => setColor("bg-pink-500")}
            className="outline-none px-6 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95 border border-gray-700"
            style={{backgroundColor: "#f943c4ff"}}
          >Pink</button>

          <button
            onClick={() => setColor("bg-orange-500")}
            className="outline-none px-6 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95 border border-gray-700"
            style={{backgroundColor: "#ff983cff"}}
          >Orange</button>
          
          <button
            onClick={() => setColor("bg-gray-900")}
            className="outline-none px-6 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95 border border-gray-700"
            style={{backgroundColor: "#111827"}}
          >Dark</button>
        </div>
      </div>
    </div>
  )
}

export default App
