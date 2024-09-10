import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  function increaseHandler(){
   setCount(count + 1);
  }

  function decreseHandler(){
    setCount(count - 1);  
   }

   function resetHandler(){
    setCount(0);
   }

  return (
    <div className="flex-col flex gap-4 font-bold [100vw] h-[100vh] justify-center items-center bg-[#344151]">
      <div className="text-[#0398d4] font-medium text-2xl">Increment && Decrement</div>
      <div className="flex flex-row justify-center bg-white gap-12 rounded-sm text-[25px] py-3 text-[#344151]">
        <button onClick={increaseHandler} className="border-r-2 text-center text-5xl w-20 border-[#bfbfbf]"> + </button>
        <div className="font-bold gap-12 text-5xl">
        {count}
        </div>
        <button onClick={decreseHandler} className="border-l-2 text-center text-5xl w-20 border-[#bfbfbf]"> - </button>
      </div>
        <button onClick={resetHandler} className="bg-blue-400 text-lg rounded-sm text-white w-16 h-9"> Reset </button>
    </div>
  );
}

export default App;
