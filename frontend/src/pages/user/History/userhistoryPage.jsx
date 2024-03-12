// import React from 'react';

import Navbar from "../../../components/Navbar/navbar";
import Sidebar from "../../../components/sidebar/sidebar";
import userNavbarDatas from "../../../components/Navbar/navbarData";
// import Recharge from "../../../components/Recharge/recharge";
import { userSidebarLinks } from "../../../components/sidebar/sidebardata";
import Userrechargehistory from "../../../components/Histrory/userrechargehistory";

const UserhistoryPage = () => {
    return (
        <>
        <div className="flex flex-col bg-white dark:bg-gray-900">
            <div>
            <Navbar links={userNavbarDatas} />  
            </div>
            <div className="flex ">
                <div>
                    <Sidebar links={userSidebarLinks} />
                </div>
                <div className="flex-1 my-auto px-10 bg-white dark:bg-gray-900" >
                    {/* <div className="mx-auto"> */}
                        <Userrechargehistory />
                    {/* </div> */}
                </div>
            </div>
            
        </div></>
    );
}

export default UserhistoryPage;
