import Navbar from "../../components/Navbar/navbar";
import userNavbarDatas from "../../components/Navbar/navbarData";
import Login from "../../components/Login/login";

const LoginPage = () => {
    return (
        <div className="font-serif">
            <Navbar links={userNavbarDatas} />
            <Login />
        </div>
    );
}

export default LoginPage;
