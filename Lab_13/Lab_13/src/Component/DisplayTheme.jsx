import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const DisplayTheme = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>Current Theme: {theme}</h2>
    </div>
  );
};

export default DisplayTheme;