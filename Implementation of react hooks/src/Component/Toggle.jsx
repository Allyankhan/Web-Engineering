import { useState } from "react";

const Toggle = () => {
  const [hide, setHide] = useState(false);

  return (  
    <div>
      <button onClick={() => setHide(!hide)}>
        {hide ? "Show" : "Hide"}
      </button> 
        {!hide && <h2>Toggle Component</h2>}
    </div>
    );
};

export default Toggle;