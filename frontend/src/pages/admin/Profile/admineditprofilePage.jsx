// import React from 'react';
import { adminNavbarLinks } from "../../../components/Navbar/navbarData";
import { adminSidebarLinks } from "../../../components/sidebar/sidebardata";
import Navbar from "../../../components/Navbar/navbar";
import Sidebar from "../../../components/sidebar/sidebar";
import Admineditprofile from "../../../components/Profile/admineditprofile";


const AdmineditprofilePage = () => {
    return (
        <div className="flex flex-col h-screen  ">
            <div>
                <Navbar links={adminNavbarLinks} />
            </div>
            <div className="flex">
                <div>
                    <Sidebar links={adminSidebarLinks} />
                </div>
                <div className="flex-1">
                    <Admineditprofile />
                </div>

            </div>
            
        </div>
    );
}

export default AdmineditprofilePage;
