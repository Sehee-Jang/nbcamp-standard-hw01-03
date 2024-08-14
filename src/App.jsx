import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import Status from "./components/Status";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header title="Counter App" />

      <Counter count={count} setCount={setCount} />

      <Status count={count} />

      <Footer year="2024" />
    </div>
  );
}

export default App;
