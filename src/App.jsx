import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const substractCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Counter cannot be less than 0");
    }
  };

  return (
    <div className="bg-slate-500 p-6">
      <div className="w-52 h-fit m-auto p-3 bg-slate-800 text-white">
        <h1 className="text-3xl font-bold underline">App Counter</h1>
        <h3 className="text-xl font-mono font-semibold my-6">
          Counter Value: {count}
        </h3>
        <Button handelClick={addCount} text="Increments" />
        <Button handelClick={substractCount} text="Decrements" />
      </div>
    </div>
  );
}

export default App;
