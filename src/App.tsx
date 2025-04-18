import { useState } from "react";
import { Button } from "@/components/ui/button";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center flex-col min-h-screen py-2 bg-gray-100">
      <h1>Vite + React</h1>
        <Button variant="default" className="my-4" onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
