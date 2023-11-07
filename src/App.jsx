import { useState } from 'react'
import ocsLogo from './assets/noaa-logo-rgb-2022.png'
import Image from './Components/Image'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <a href="https://react.dev" target="_blank">
          <img src={ocsLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>OCS Elevated Privileges Training Course</h1>
      <div><Image></Image></div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

    </>
  )
}

export default App
