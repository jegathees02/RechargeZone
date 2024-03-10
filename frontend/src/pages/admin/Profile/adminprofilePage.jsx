import { adminNavbarLinks } from "../../../components/Navbar/navbarData";
import { adminSidebarLinks } from "../../../components/sidebar/sidebardata";
import Navbar from "../../../components/Navbar/navbar";
import Sidebar from "../../../components/sidebar/sidebar";
import Adminprofile from "../../../components/Profile/adminprofile";


const AdminprofilePage = () => {
    // const user = {
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     email: 'john@example.com',
    //     // Add more user details here
    //   };
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
                    <Adminprofile  user={JSON.parse(localStorage.getItem('userData'))}/>
                </div>

            </div>
            
        </div>
    );
}

export default AdminprofilePage;
