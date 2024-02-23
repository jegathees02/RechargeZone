import Logo from "../Logo/logo";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import ThemeSwitcher from "./themeSwitch";
// import { useSelector } from 'react-redux';

function Navbar({ links }) {
  // console.log(links[0])
  // const userRole = useSelector((state) => state.userRole.role);
  // const userNavbarLinks = [
  //   { href: "/", label: "Home" },
  //   { href: "/profile", label: "Profile" },
  //   { href: "/settings", label: "Settings" },
  // ];
  
  // const adminNavbarLinks = [
  //   { href: "/admin/dashboard", label: "Dashboard" },
  //   { href: "/admin/users", label: "Users" },
  //   { href: "/admin/settings", label: "Settings" },
  // ];

    return (
        <>


<nav className="bg-white border-gray-200 dark:bg-gray-900 top-0">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-4">
  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <Logo />
      {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
      {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
  </a>
  <div className="flex justify-end gap-10">
  <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
      </button>
      {/* <!-- Dropdown menu --> */}
      {links === "f" && <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          {/* <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span> */}
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" >Profile</a>
          </li>
          <li>
            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" >Logout</a>
          </li>
        {/* {links.map((link,index) => (
          <li key={index}>
            {console.log(link)}
            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" >{link.label}</a>
          </li>
        ))} */}
        </ul>
      </div>}
      <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>

  {/* this div is mapping of main element */}
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    {links.map((link,index) => (
          <li key={index}>
            {console.log(link)}
            <Link to={link.href} className=" block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0" >{link.label}</Link>
          </li>
        ))}
        <li>
        <ThemeSwitcher />
        </li>
    </ul>
  </div>
  </div>
  </div>
</nav>

        </>
    );
}



Navbar.propTypes = {
  links: PropTypes.array.isRequired, // Or use PropTypes.arrayOf(PropTypes.shape({ ... })) for specific structure
};


export default Navbar;