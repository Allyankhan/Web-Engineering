import { useRef, useEffect } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Auto Focus Input</h2>

      <input
        type="text"
        ref={inputRef}
        placeholder="Enter your name"
      />
    </div>
  );
};

export default FocusInput;