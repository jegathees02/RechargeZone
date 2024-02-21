import Landing from "../components/Landing/landing";
import Navbar from "../components/Navbar/navbar";
import userNavbarDatas from "../components/Navbar/navbarData";
import Footer from "../components/Footer/footer";
// import Sidebar from "../components/sidebar/sidebar";

const LandingPage = () => {
    return (
        <div className="flex flex-col">
      {/* <div className="flex flex-row"> */}
      <Navbar links={userNavbarDatas} />
      {/* <Sidebar className=" p-4 fixed mt-4" /> */}
      {/* <div className="w"> <Sidebar links={adminNavbarLinks}/></div> */}
      {/* </div> */}
      <Landing />
      {/* <Navbar className="col-span-4 shadow-md" /> */}

      {/* Sidebar */}
      {/* <Sidebar className=" p-4 fixed h-full" /> */}

      {/* Main content */}
      {/* <div className="col-span-9 p-8">
      </div> */}
    <Footer />
    </div>
    );
}

export default LandingPage;
