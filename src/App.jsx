import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Mobile.css'
import Contant from './component/contant'
import Contant_sec from './component/contant_sec'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ overflowX: 'hidden'}}>
    <Contant/>
    <Contant_sec/>
    </div>
  )
}

export default App
