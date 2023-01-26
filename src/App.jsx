import { useState } from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import ErrorPage from "./error/ErrorPage"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Product from "./pages/Product"
function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
