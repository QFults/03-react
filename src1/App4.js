import { useState } from 'react'

const App = () => {

  const [countState, setCountState] = useState({
    count: 0,
    name: 'John Doe'
  })

  const handleIncrementCount = () => {
    setCountState({ ...countState, count: countState.count + 1 })
  }

  const handleDecrementCount = () => {
    setCountState({ ...countState, count: countState.count - 1 })
  }


  return (
    <div>
      <h1>{countState.name}</h1>
      <h1>Count: {countState.count}</h1>
      <button onClick={handleIncrementCount}>+</button>
      <button onClick={handleDecrementCount}>-</button>
    </div>
  )
}

export default App
