import Footer from "./Components/Footer";
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Nav from './Components/Nav'
import '@mantine/core/styles.css';
import { Routes,Route } from "react-router-dom";
import Cart from "./Components/Cart";
import { Courses } from "./Pages/Instructor/Courses.jsx";

function App() {
  const isNavbarVisible = ['/Cart', '/Login', '/SignUp','/'];

  return (
    <>
    {isNavbarVisible.includes(window.location.pathname) && <Nav />}
    <Routes>
       <Route path="Pages/Instructor/Courses" element={<Courses />} />
       <Route path="/Components/Cart" element={<Cart />} />
       <Route path="/Pages/Signup" element={<SignUp />} />
      <Route path="/Pages/Login" element={<Login />} />
      
    </Routes>
    <Footer/>
    </>
  )
}

export default App
