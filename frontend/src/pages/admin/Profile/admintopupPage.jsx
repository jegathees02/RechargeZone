// import React from 'react';
import { adminNavbarLinks } from "../../../components/Navbar/navbarData";
import { adminSidebarLinks } from "../../../components/sidebar/sidebardata";
import Navbar from "../../../components/Navbar/navbar";
import Sidebar from "../../../components/sidebar/sidebar";
import Admintopup from "../../../components/Adminplanchanges/admintopup";

const AdmintopupPage = () => {
    return (
        <div className="flex flex-col">
            <div>
                <Navbar links={adminNavbarLinks} />
            </div>
            <div className="flex">
                <div>
                    <Sidebar links={adminSidebarLinks} />
                </div>
                <div className="flex-1">
                    <Admintopup/>
                </div>

            </div>
            
        </div>
    );
}

export default AdmintopupPage;
