import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/buttons/button'
import Title from './components/texts/title'
import Text from './components/texts/text'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title text='Vite + React' />
      <div className="card">
        <Button text={`count is ${count}`} onClick={() => setCount((count) => count + 1)} />
        <Text>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Text>
      </div>
    </div>
  )
}

export default App
