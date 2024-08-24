import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { WidgetsProvider } from "./WidgetsContext";
import Search from "./components/Search";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <WidgetsProvider>
      <div className="w-100 h-100">
          <Header />
          <Search/>
        <Body />
        </div>
        </WidgetsProvider>
    </>
  );
}

export default App;
