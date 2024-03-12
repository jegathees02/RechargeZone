import React,{ Suspense } from "react";

// import Editprofile from "../../../components/Profile/editprofile";
import Navbar from "../../../components/Navbar/navbar";
import Sidebar from "../../../components/sidebar/sidebar";
import userNavbarDatas from "../../../components/Navbar/navbarData";
import { userSidebarLinks } from "../../../components/sidebar/sidebardata";

const LazyEditProfile = React.lazy(() => import('../../../components/Profile/editprofile'))

const EditprofilePage = () => {
    return (
        <div className="flex flex-col bg-white dark:bg-gray-900">
            <Navbar links={userNavbarDatas}/>
            <div className="flex">
                <Sidebar links={userSidebarLinks}/>
                <div className="mx-auto  bg-white dark:bg-gray-900">
                    <Suspense fallback={<div className="dark: text-2xl text-white">Loading ...</div>}>
                        <LazyEditProfile />
                    </Suspense>
                {/* <Editprofile /> */}
                </div>
                
            </div>
            {/* <h1>hai</h1> */}
            
        </div>
    );
}

export default EditprofilePage;
