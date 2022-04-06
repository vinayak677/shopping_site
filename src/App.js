import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Footer from "./Pages/Footer";
import Product from "./Pages/Product";
import About from "./Pages/About";
import ProductItem from "./Pages/Product/ProductItem"

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductItem />} />
        <Route path="/about" element={<About />} />
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
