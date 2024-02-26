
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
import EditprofilePage from "./pages/user/Profile/usereditprofilePage";
import UserrechargePage from "./pages/user/RechargePage/userrechargePage";
import ViewrechargePage from "./pages/user/RechargePage/viewrechargePage";
import UserHomePage from "./pages/user/Homepage/userHomePage";
import UserprofilePage from "./pages/user/Profile/userprofilePage";
import UserhistoryPage from "./pages/user/History/userhistoryPage";
import UserrechargeotherPage from "./pages/user/RechargePage/userrechargeotherPage";


//admin imports
import AdminprofilePage from "./pages/admin/Profile/adminprofilePage";
import AdmineditprofilePage from "./pages/admin/Profile/admineditprofilePage";
import Rechargecard from "./components/Cards/Rechargecards/rechargecard";
import AdminprepaidPage from "./pages/admin/Profile/adminprepaidPage";
import AdminpostpaidPage from "./pages/admin/Profile/adminpostpaidPage";
import AdmintopupPage from "./pages/admin/Profile/admintopupPage";


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
        <Route path="user/profile/edit" element={<EditprofilePage/>} />
        <Route path="/user/recharge" element={<UserrechargePage/>} />
        <Route path="/user/profile" element={<UserprofilePage/>} />
        <Route path="user/recharge/:id" element={<ViewrechargePage/>} />
        <Route path="user/recharge/other" element={<UserrechargeotherPage/>} />
        <Route path="user/history" element={<UserhistoryPage/>} />
        {/* </Route> */}



        {/* admin paths */}
        <Route path="demo/card" element={<Rechargecard/>} />
        <Route path="admin/profile" element={<AdminprofilePage/>} />
        <Route path="admin/profile/edit" element={<AdmineditprofilePage/>} />
        <Route path="admin/prepaid" element={<AdminprepaidPage/>} />
        <Route path="admin/postpaid" element={<AdminpostpaidPage/>} />
        <Route path="admin/top-up" element={<AdmintopupPage/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
