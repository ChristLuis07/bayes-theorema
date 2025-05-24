import { useState } from 'react'

import './App.css'
import MalwareDetector from './components/MalwareDetector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MalwareDetector />
    </>
  )
}

export default App
