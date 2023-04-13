import { useState } from "react";

const UseEffectBasics = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>useEffect Basics</h2>
      <button class="btn" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
