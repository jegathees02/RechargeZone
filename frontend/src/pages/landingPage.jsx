import React,{Suspense} from "react";

// import Landing from "../components/Landing/landing";
import Navbar from "../components/Navbar/navbar";
// import userNavbarDatas from "../components/Navbar/navbarData";
import Footer from "../components/Footer/footer";
// import Sidebar from "../components/sidebar/sidebar";
const dummyList = [];

const LazyLanding = React.lazy(() => import('../components/Landing/landing'));

const LandingPage = () => {
    return (
        <div className="flex flex-col dark:bg-gray-900 h-screen">
      {/* <div className="flex flex-row"> */}
      <Navbar links={dummyList} />
      {/* <Sidebar className=" p-4 fixed mt-4" /> */}
      {/* <div className="w"> <Sidebar links={adminNavbarLinks}/></div> */}
      {/* </div> */}
      {/* <Landing /> */}
      <Suspense fallback={<div>Loading ..</div>}>
        <LazyLanding />
      </Suspense>
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
