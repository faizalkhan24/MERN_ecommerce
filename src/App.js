import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Navigation from "./Customer/Components/Nevigation";  // Corrected import
import HomePage from "./Customer/Pages/HomePage";
import Footer from "./Customer/Components/Footer/Footer";
import Product from "./Customer/Components/Product/Product";

function App() {
  return (
    <div className="">
      <Navigation /> {/* Corrected component name */}
      <div>
        {/* <HomePage /> */}
        <Product/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
