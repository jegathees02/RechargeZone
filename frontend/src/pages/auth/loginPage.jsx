import Navbar from "../../components/Navbar/navbar";
// import userNavbarDatas from "../../components/Navbar/navbarData";

import Login from "../../components/Login/login";

const emptylist = [];

const LoginPage = () => {
    return (
        <div className="font-serif">
            <Navbar links={emptylist} />
            <Login />
        </div>
    );
}

export default LoginPage;
