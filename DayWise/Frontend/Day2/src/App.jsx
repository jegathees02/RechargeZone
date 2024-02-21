
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/login';
import Navbar from "./components/Navbar/navbar";
import Signup from "./components/SignUp/signup";
import Logo from "./components/Logo/logo";
import Sidebar from "./components/sidebar/sidebar";
import LandingPage from "./pages/landingPage";

import UserHomePage from "./pages/user/Homepage/userHomePage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/logo" element={<Logo/>} />
        <Route path="/sidebar" element={<Sidebar/>} />
        <Route path="/home" element={<UserHomePage/>} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
