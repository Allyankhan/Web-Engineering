import Counter from "./Component/Counter";
import Toggle from "./Component/Toggle";
import ClickCounter from "./Component/Track";

import DisplayTheme from "./Component/DisplayTheme";
import ThemeToggle from "./Component/ToggleTheme";
import { ThemeProvider } from "./Component/ThemeContext";
import reducer from "./Component/count_reducer";
import FocusInput from "./Component/Using_useref";
function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Toggle /> */}
      {/* <ClickCounter /> */}

        {/* <ThemeProvider>  */}
        {/* <DisplayTheme /> */}
        {/* <ThemeToggle /> */}
      {/* </ThemeProvider>  */}
      {/* <Counter reducer={reducer} /> */}
       <FocusInput />
    </div>
  );
}

export default App;