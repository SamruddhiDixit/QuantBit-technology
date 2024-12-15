import { useEffect } from 'react';
import './App.css';
import useCount from './useCount';

function App() {
  const [count,add,minus,reset]=useCount()
  
  return (
    <div className="App">
      <h1>App Component:{count}</h1>
      <button onClick={()=>add()}>Increment</button>
      <button onClick={()=>minus()}>Decrement</button>
      <button onClick={()=>reset()}>Reset</button>
    </div>
  );
}

export default App;
