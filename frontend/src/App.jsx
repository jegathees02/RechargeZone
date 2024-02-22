
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './components/Login/login';
import LoginPage from "./pages/auth/loginPage";
import Navbar from "./components/Navbar/navbar";
// import Signup from "./components/SignUp/signup";
import SignupPage from "./pages/auth/signupPage";
import Logo from "./components/Logo/logo";
import Sidebar from "./components/sidebar/sidebar";
import LandingPage from "./pages/landingPage";
import EditprofilePage from "./pages/editprofilePage";
import UserrechargePage from "./pages/user/RechargePage/userrechargePage";
import ViewrechargePage from "./pages/user/RechargePage/viewrechargePage";
import UserHomePage from "./pages/user/Homepage/userHomePage";
import UserprofilePage from "./pages/user/Profile/userprofilePage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element = {<LoginPage />} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/logo" element={<Logo/>} />
        <Route path="/sidebar" element={<Sidebar/>} />
        <Route path="/home" element={<UserHomePage/>} />
        <Route path="/edit" element={<EditprofilePage/>} />
        <Route path="/user/recharge" element={<UserrechargePage/>} />
        <Route path="/user/profile" element={<UserprofilePage/>} />
        <Route path="user/recharge/:id" element={<ViewrechargePage/>} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
