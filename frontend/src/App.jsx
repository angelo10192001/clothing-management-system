import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddProduct from "./AddProduct"
import Mainform from "./Mainform";

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Mainform />}> </Route>
    <Route path='/createproduct' element={<AddProduct />}></Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App
