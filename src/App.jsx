import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="Container">
    <h1>Welcome to My React Project</h1>
    <p>CI/CD and cloud DevOps Course</p>
   </div>
  )
}

export default App
