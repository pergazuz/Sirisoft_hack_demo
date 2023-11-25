import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 


function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", { username, password });
        // Add logic to handle login here
    };

    return (
        <div style={{ backgroundColor: '#244800' }} className="flex justify-center items-center h-screen">
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <h1 className="text-center text-2xl font-bold mb-2">Login</h1>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={username} onChange={handleUsernameChange}/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={handlePasswordChange}/>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-[#0C1701] hover:bg-[#0E1D00] text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Login
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                    {/* <p>Don't have an account? <Link to="/signup">Sign Up</Link></p> */}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
