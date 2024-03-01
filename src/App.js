import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Nevigation from "./Customer/Components/Nevigation";
import HomePage from "./Customer/Pages/HomePage";

function App() {
  return (
    <div className="">
      <div>
        <Nevigation />
      </div>
      <HomePage/>
    </div>
  );
}

export default App;
