import Navbar from "../../../components/Navbar/navbar";
import userNavbarDatas from "../../../components/Navbar/navbarData";
import ViewRecharge from "../../../components/Recharge/viewrecharge";

const ViewrechargePage = () => {
    return (
        <div className="flex flex-col">
            <div>
                <Navbar  links={userNavbarDatas}/>
            </div>
            <div>
                <ViewRecharge />
            </div>
            
        </div>
    );
}

export default ViewrechargePage;
