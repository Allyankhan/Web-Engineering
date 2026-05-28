import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Product from "./component/Product";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <BrowserRouter>

      <nav>
        {/* <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> */}
        {/* <Link to="/product/1">Product 1</Link> |{" "}
<Link to="/product/2">Product 2</Link>

         */}
         <Link to="/login">Login</Link> |{" "}
         <Link to="/dashboard">Dashboard</Link>
      </nav>

      <hr />

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/product/:productId" element={<Product />} /> */}
        <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;