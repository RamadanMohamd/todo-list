import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { MainLayout } from "@/layouts/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MainLayout>
      <h1>Vite + React</h1>
      <Button variant="default" className="my-4" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </MainLayout>
  );
}

export default App;
