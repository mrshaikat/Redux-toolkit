import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Counter, decrement, increment } from './features/counters/countersSlice';

function App() {
  const [count, setCount] = useState(0)
  const counters: Counter[] = useSelector((state: { counters: Counter[] }) => state.counters);
  const dispatch = useDispatch();
  const handleIncrement = (id: number) => {
    dispatch(increment(id));
  }
  const handleDecrement = (id: number) => {
    dispatch(decrement(id));
  }
  return (
    <>
      <h1>Vite + React</h1>
      {
        counters.map((counter: Counter) => (
          <div key={counter.id}>
            <h2>Counter {counter.id}</h2>
            <p>{counter.value}</p>
            <button onClick={() => handleIncrement(counter.id)}>Increment</button>
            <button onClick={() => handleDecrement(counter.id)}>Decrement</button>
          </div>
        ))
      }
     
    </>
  )
}

export default App
