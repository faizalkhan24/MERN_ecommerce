import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Nevigation from "./Customer/Components/Nevigation";
import HomePage from "./Customer/Pages/HomePage";
import Footer from "./Customer/Components/Footer/Footer";
import Product from "./Customer/Components/Product/Product";

function App() {
  return (
    <div className="">
      <Nevigation />
      <div>
        {/* <HomePage /> */}
        <Product/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
