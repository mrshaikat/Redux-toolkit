import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Counter, decrement, increment } from './features/counters/countersSlice';
import  News  from './components/News.tsx';

function App() {
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
      <h1>Vite + React Redux + Toolkit</h1>
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
     <hr />
     <h1>News Data</h1>
     <News/>
    </>
  )
}

export default App
