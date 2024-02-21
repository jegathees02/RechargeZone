import Navbar from "../../../components/Navbar/navbar";
import Sidebar from "../../../components/sidebar/sidebar";
import Footer from "../../../components/Footer/footer";
import userNavbarDatas from '../../../components/Navbar/navbarData';
import adminNavbarLinks from '../../../components/Navbar/navbarData'; 

const UserHomePage = () => {
    // const userRole = 'user';
  return (
    <>
    <div className="flex flex-col">
      {/* Navbar */}
      {/* <div className=""> */}
        {/* {console.log(userNavbarDatas)}; */}
      <Navbar links={userNavbarDatas} />
      {/* <Navbar />     */}
      {/* </div> */}
      <div className="flex flex-row">
      {/* <Sidebar className=" p-4 fixed mt-4" /> */}
      <div className="w"> <Sidebar links={adminNavbarLinks}/></div>
      </div>
      {/* <Navbar className="col-span-4 shadow-md" /> */}

      {/* Sidebar */}
      {/* <Sidebar className=" p-4 fixed h-full" /> */}

      {/* Main content */}
      {/* <div className="col-span-9 p-8">
      </div> */}
    <Footer />
    </div>
    </>
  );
};

export default UserHomePage;
