import { useState,useEffect  } from "react";
import { Link , useNavigate } from "react-router-dom";
import "../../../src/index.css";
import loginImage from "../../../src/assets/images/login.gif";
// import Skeleton from 'react-loading-skeleton';
import LoginSkeleton from "../Skeleton/loginSkeleton";

// import { useDispatch } from "react-redux"; 
// import { setName } from "../../redux/userRoleSlice"; 

import AdminService from "../../Services/AdminService";
import UserService from "../../Services/UserService";


const Login = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  // const[role,setRole] = useState("user");
  // const[email,setEmail] = useState("");
  // const [password, setPassword]=useState("");
  const [userData,setUserData] = useState({
    email:"",
    password:"",
    role:""
  });


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // After 2 seconds, set loading to false
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer
  }, []); 

  // const handleChange = (e) => {
  //   const {name, value} = e.target;
  //   setUserData(prevState => ({
  //     ...prevState,
  //     [name] : value
  //   }));
  // }

    const handleLogin = async (e) => {
      console.log(userData);
      e.preventDefault();
      setLoading(true);
      console.log(userData.email);
      console.log(userData.password);
      if(userData.role === 'user') {
        try {
          const response = await UserService.userLogin({
            email:userData.email,
            password:userData.password,
            role:userData.role
          })

          localStorage.setItem('token',response.data.token);
          localStorage.setItem('userData',JSON.stringify(response.data));
          if(response.data.role === "user") {
            navigate('/home');
          }
          else {
            alert("Invalid Credentials");
          }
        }
        catch (e) {
          alert(e);
        }
        // if(email==="admin@gmail.com" && password==="12345"){
        //   navigate('/admin/prepaid')
        // }
      }
      else if(userData.role == "admin") {
        try{
          const response = await AdminService.loginAdmin({
            email : userData.email,
            password : userData.password,
            role : userData.role
          })
          // localStorage.setItem('token',response.data.token);
          // navigate('/admin/prepaid');
          if(response.data.role === "admin") {
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('userData',JSON.stringify(response.data));
            navigate('/admin/prepaid');
          }
          else {
            alert("Invalid Credentials");
            navigate('/login');
          }
        }
        catch (e) {
          alert(e);
        }
      }
      else{
        alert("Invalid Credentials");
        navigate('/login');
      }

    }
    return (
      <>
      {loading ? (<LoginSkeleton />) : (
        <section className="h-full bg-white dark:bg-gray-900">
      <div className="container px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src={loginImage}
              className="w-full"
              alt="Phone image"
            />
          </div>

          {/* <!-- Right column container with form --> */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form>


              <ul className="grid w-full gap-6 md:grid-cols-2 mb-5 ">
                  <li>
                      <input type="radio" id="user" name="role" value="user" className="hidden peer" onClick={(e) => {setUserData({...userData, role: e.target.value,});}}/>
                      <label htmlFor="user" className="inline-flex items-center justify-between w-full px-4 py-2.5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                          <div className="">
                              <div className="w-full text-lg font-semibold">User</div>
                          </div>
                          <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </label>
                  </li>
                  <li>
                      <input type="radio" id="admin" name="role" value="admin" className="hidden peer" onClick={(e) => {setUserData({...userData, role: e.target.value,});}}/>
                      <label htmlFor="admin" className="inline-flex items-center justify-between w-full px-4 py-2.5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                          <div className="">
                              <div className="w-full text-lg font-semibold text-center">Admin</div>
                          </div>
                          <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </label>
                  </li>
              </ul>


            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-steel-900 dark:text-white">Your email</label>
              <input
               value={userData.email} 
              onChange={(e) => {
                setUserData({
                  ...userData,
                  email : e.target.value,
                })
              }} 
              type="email"
               id="email" 
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="name@gmail.com"  />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input value={userData.password} 
              onChange={(e) => {
                setUserData({
                  ...userData,
                  password: e.target.value,
                })
              }}   type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"  />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
              </div>
              <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <div>
              <p className="dark:text-white">No Account&nbsp; ? &nbsp;<Link className="text-red-700 hover:underline" to="/signup">SignUp </Link></p>
            </div>
            <button onClick={(e) => handleLogin(e)} type="submit" className="text-white bg-churn hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2 mt-2 text-center dark:bg-churn dark:hover:bg-green-700 dark:focus:ring-green-800">Login</button>

              {/* <!-- Divider --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              
              <div className="flex justify-around">
              <button 
                className="flex items-center  bg-white dark:bg-stone-800 border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:hover:bg-stone-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"
                    viewBox="-0.5 0 48 48" version="1.1">

                    <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Color-" transform="translate(-401.000000, -860.000000)">
                            <g id="Google" transform="translate(401.000000, 860.000000)">
                                <path
                                    d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                    id="Fill-1" fill="#FBBC05"> </path>
                                <path
                                    d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                    id="Fill-2" fill="#EB4335"> </path>
                                <path
                                    d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                    id="Fill-3" fill="#34A853"> </path>
                                <path
                                    d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                    id="Fill-4" fill="#4285F4"> </path>
                            </g>
                        </g>
                    </g>
                </svg>
                <span className="dark:text-black">Continue with Google</span>
            </button>

            <button 
                className="flex items-center  bg-white dark:bg-stone-800 border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:hover:bg-stone-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"
                    viewBox="-1.5 0 20 20" version="1.1">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-102.000000, -7439.000000)" fill="#000000">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                <path
                                    d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485"
                                    id="apple-[#173]">

                                </path>
                            </g>
                        </g>  
                    </g>
                </svg>

                <span className="dark:text-black">Continue with Apple</span>
            </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>
    )}
    </>
    );
}

export default Login;
