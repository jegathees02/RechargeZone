// import axios from 'axios';
import { useEffect, useState } from 'react';
import UserService from '../../Services/UserService';

const Editprofile = () => {
    // Define state variables for form fields
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [updateData, setUpdateData] = useState([]);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            const response = UserService.updateprofile(localStorage.getItem('token'),updateData);
            if(response.status == 200) alert('updated');
            localStorage.setItem('userData',JSON.stringify(updateData));
            console.log(response);
        }
        catch (e) {
            console.log(e);
        }
        // Add your logic here to submit the form data
        // For example, you can send a POST request to the server with the form data
        // console.log('Form submitted:', { firstName, lastName, email, password, confirmPassword });
        // // Reset form fields after submission (optional)
        // setFirstName('');
        // setLastName('');
        // setEmail('');
        // setPassword('');
        // setConfirmPassword('');
    };
    

    useEffect(() => {
        const getdata = () => {
            try{
                const response = JSON.parse(localStorage.getItem('userData'));
                setUpdateData(response);
            }
            catch(e) {
                console.log(e);
            }
        }
        getdata();

    },[]);

    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="dark: bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 max-w-md w-full border-2 border-churn">
                <h1 className="text-2xl font-semibold mb-6 dark:text-churn">Edit Profile</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold">First Name:</label>
                            <input
                                className="dark:bg-gray-600 hover:border-gray-900 border p-2 rounded-md"
                                type="text"
                                value={updateData.fname}
                                onChange={(e) => setUpdateData({
                                    ...updateData,
                                    fname : e.target.value,
                                 })}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold">Last Name:</label>
                            <input
                                className="dark:bg-gray-600 hover:border-gray-900 border p-2 rounded-md"
                                type="text"
                                value={updateData.lname}
                                onChange={(e) => setUpdateData({
                                    ...updateData,
                                    lname : e.target.value,
                                 })}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold">Email:</label>
                            <input
                                className="dark:bg-gray-600 hover:border-gray-900 border p-2 rounded-md"
                                type="email"
                                value={updateData.email}
                                onChange={(e) => setUpdateData({
                                    ...updateData,
                                    email : e.target.value,
                                 })}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold">Service Provider:</label>
                            <input
                                className="dark:bg-gray-600 hover:border-gray-900 border p-2 rounded-md"
                                type="text"
                                value={updateData.serviceProvider}
                                onChange={(e) => setUpdateData({
                                    ...updateData,
                                    serviceProvider : e.target.value,
                                 })}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold">Sim Type:</label>
                            <input
                                className="dark:bg-gray-600 hover:border-gray-900 border p-2 rounded-md"
                                type="text"
                                value={updateData.city}
                                onChange={(e) => setUpdateData({
                                    ...updateData,
                                    city : e.target.value,
                                 })}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold">Phone:</label>
                            <input
                                className="dark:bg-gray-600 hover:border-gray-900 border p-2 rounded-md"
                                type="number"
                                value={updateData.phone}
                                onChange={(e) => setUpdateData({
                                    ...updateData,
                                    phone : e.target.value,
                                 })}
                            />
                        </div>
                        <div className="col-span-2 flex justify-center">
                            <button onClick={() => alert("Updated")} className="text-white border px-6 py-2 bg-blue-700 hover:bg-blue-600 rounded-md" type="submit">Update Profile</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Editprofile;
