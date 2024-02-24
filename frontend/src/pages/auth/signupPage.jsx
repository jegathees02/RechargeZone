import Navbar from "../../components/Navbar/navbar";
import Signup from "../../components/SignUp/signup";
// import userNavbarDatas from "../../components/Navbar/navbarData";


const emptylist = [];

const SignupPage = () => {
    return (
        <div >
            <Navbar links={emptylist} />
            <Signup />
            
        </div>
    );
}

export default SignupPage;
