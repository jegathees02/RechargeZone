import Editprofile from "../components/Profile/editprofile";
import Navbar from "../components/Navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import userNavbarDatas from "../components/Navbar/navbarData";

const EditprofilePage = () => {
    return (
        <div className="flex flex-col">
            <Navbar links={userNavbarDatas}/>
            <div className="flex">
                <Sidebar links={userNavbarDatas}/>
                <Editprofile />
            </div>
            {/* <h1>hai</h1> */}
            
        </div>
    );
}

export default EditprofilePage;
