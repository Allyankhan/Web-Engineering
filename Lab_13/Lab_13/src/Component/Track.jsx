import { useState, useEffect } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Button Click Counter</h2>
      <p>You clicked {count} times</p>

      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default ClickCounter;