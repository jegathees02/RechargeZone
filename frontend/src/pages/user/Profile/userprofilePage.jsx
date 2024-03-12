// import React from 'react';
import React, { Suspense } from 'react';

import Navbar from "../../../components/Navbar/navbar";
import userNavbarDatas from "../../../components/Navbar/navbarData";
import { userSidebarLinks } from "../../../components/sidebar/sidebardata";
import Sidebar from "../../../components/sidebar/sidebar";
// import Userprofile from "../../../components/Profile/userprofile";

const LazyUserprofile = React.lazy(() => import ('../../../components/Profile/userprofile'));

const UserprofilePage = () => {
    // const user = {
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     email: 'john@example.com',
    //     // Add more user details here
    //   };
    return (
        <div className="flex flex-col bg-white dark:bg-gray-900">
            <Navbar links={userNavbarDatas} />
            <div className="flex">
                <div>
                    <Sidebar links={userSidebarLinks} />
                </div>
                <div className='mx-auto'>
                    <Suspense fallback={<div className = "dark:text-white  text-2xl">Loading</div>}>
                        <LazyUserprofile user={JSON.parse(localStorage.getItem('userData'))} />
                    </Suspense>
                    {/* <Userprofile user={user} /> */}
                </div>
            </div>
            
        </div>
    );
}

export default UserprofilePage;
