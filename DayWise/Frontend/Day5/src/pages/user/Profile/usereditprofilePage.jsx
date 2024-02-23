import Editprofile from "../../../components/Profile/editprofile";
import Navbar from "../../../components/Navbar/navbar";
import Sidebar from "../../../components/sidebar/sidebar";
import userNavbarDatas from "../../../components/Navbar/navbarData";
import { userSidebarLinks } from "../../../components/sidebar/sidebardata";

const EditprofilePage = () => {
    return (
        <div className="flex flex-col bg-gradient-to-r from-slate-50 to-emerald-100 dark:bg-gradient-to-r from-slate-900 to-slate-700">
            <Navbar links={userNavbarDatas}/>
            <div className="flex">
                <Sidebar links={userSidebarLinks}/>
                <div className="mx-auto">
                <Editprofile />
                </div>
                
            </div>
            {/* <h1>hai</h1> */}
            
        </div>
    );
}

export default EditprofilePage;
