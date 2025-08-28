import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Classification from "../pages/Classification";
import Model from "../pages/Model";
import About from "../pages/About";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/classify' element={<Classification/>}/>
        <Route path='/model' element={<Model/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
  )
}