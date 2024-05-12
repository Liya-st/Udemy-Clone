import Footer from "./Components/Footer";
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home"
import Nav from './Components/Nav'
import '@mantine/core/styles.css';
import { Routes,Route } from "react-router-dom";
import Cart from "./Components/Cart";

function App() {

  return (
    <>
    <Nav />
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Components/Cart" element={<Cart />} />
       <Route path="/Pages/Signup" element={<SignUp />} />
      <Route path="/Pages/Login" element={<Login />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
