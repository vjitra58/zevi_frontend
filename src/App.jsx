import { useState } from 'react'

/* Notes:
  in this app we have two pages : home and products --> set up routing for them;
*/

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App
