import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  const handleIncrease= () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  
  return (
    <div className='flex justify-center flex-col items-center h-screen space-x-4 gap-4'>
      <h2 className="text-5xl ">{count}</h2>
      
      <button className="btn btn-primary border px-5 py-2 hover:opacity-45 cursor-pointer rounded bg-green-700" onClick={handleIncrease}>
        Increase count
      </button>
      <button className="btn btn-error border px-5 py-2 hover:opacity-45 cursor-pointer rounded bg-red-800" onClick={ handleDecrease}>
      handleDecrease
      </button>
      
    </div>
  );
};
export default App;
