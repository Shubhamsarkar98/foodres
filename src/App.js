import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Start from "./pages/Start";

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" exect element={<Start/>}/>
      <Route path="/menu" exect element={<Menu/>}/>
      <Route path="/cart" exect element={<Cart/>}/>
     <Route path="/login" element={<Login/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
