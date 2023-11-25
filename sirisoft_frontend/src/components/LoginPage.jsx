import React, { useState } from 'react';
import SignupModal from './SignupModal'; // Adjust this path based on your project structure
import { useNavigate } from 'react-router-dom';



function LoginPage() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", { username, password });
        navigate('/home');
    };
    

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div className="bg-gradient-custom flex justify-center items-center h-screen">
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="flex justify-center">
                        <img src="/Logo.png" alt="Logo" className="mb-4" />
                    </div>
                    <div className="mb-4">
                        <h1 className="text-center text-2xl font-bold mb-2">Login</h1>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="username" 
                            type="text" 
                            placeholder="Username" 
                            value={username} 
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                            id="password" 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-gradient-custom text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Login
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <p>Don't have an account? <button onClick={openModal} className="text-purple-500 hover:text-purple-700">Sign Up</button></p>
                    </div>
                </form>
            </div>
            <SignupModal show={showModal} onClose={closeModal} />
        </div>
    );
}

export default LoginPage;
