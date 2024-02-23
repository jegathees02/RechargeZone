import Navbar from "../../components/Navbar/navbar";
import Signup from "../../components/SignUp/signup";
import userNavbarDatas from "../../components/Navbar/navbarData";

const SignupPage = () => {
    return (
        <div >
            <Navbar links={userNavbarDatas} />
            <Signup />
            
        </div>
    );
}

export default SignupPage;
