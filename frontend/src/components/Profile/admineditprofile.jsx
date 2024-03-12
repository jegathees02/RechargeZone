// import React from 'react';
import { useState } from 'react';

const Admineditprofile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic here to submit the form data
        // For example, you can send a POST request to the server with the form data
        console.log('Form submitted:', { firstName, lastName, email, password, confirmPassword });
        // Reset form fields after submission (optional)
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-white dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-900 border-2 border-churn shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-semibold mb-6  dark:text-churn">Edit Profile</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-white">
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold">First Name:</label>
                            <input
                                className="dark:bg-gray-600 hover:border-gray-900 border p-2 rounded-md"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold">Last Name:</label>
                            <input
                                className="dark:bg-gray-600 hover:border-gray-900 border p-2 rounded-md"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold">Email:</label>
                            <input
                                className="dark:bg-gray-600 hover:border-gray-900 border p-2 rounded-md"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold">Password:</label>
                            <input
                                className="dark:bg-gray-600 hover:border-gray-900 border p-2 rounded-md"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-600 font-semibold">Confirm Password:</label>
                            <input
                                className="dark:bg-gray-600 hover:border-gray-900 border p-2 rounded-md"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
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

export default Admineditprofile;
