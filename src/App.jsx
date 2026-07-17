import { useState } from 'react'
import MyFunc from "./functions"

function App() {
  const username = "harris"
  return (
    <>
      <MyFunc></MyFunc>
      <h3>Hello {username}</h3>
    </>
  )
}

export default App
