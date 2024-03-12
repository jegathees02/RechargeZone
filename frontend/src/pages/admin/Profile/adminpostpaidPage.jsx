// import React from 'react';
import { adminNavbarLinks } from "../../../components/Navbar/navbarData";
import { adminSidebarLinks } from "../../../components/sidebar/sidebardata";
import Navbar from "../../../components/Navbar/navbar";
import Sidebar from "../../../components/sidebar/sidebar";
// import Adminprepaid from "../../../components/Adminplanchanges/adminprepaid";
import Adminpostpaid from "../../../components/Adminplanchanges/adminpostpaid";

const AdminpostpaidPage = () => {
    return (
        <div className="flex flex-col bg-white dark:bg-gray-900 ">
            <div>
                <Navbar links={adminNavbarLinks} />
            </div>
            <div className="flex">
                <div>
                    <Sidebar links={adminSidebarLinks} />
                </div>
                <div className="flex-1">
                    <Adminpostpaid/>
                </div>

            </div>
            
        </div>
    );
}

export default AdminpostpaidPage;
