import React, { useState } from 'react';

const SignupModal = ({ onClose, show }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup Info:", { name, email, password, confirmPassword });
        // Add your signup logic here
    };

    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-xl bg-white">
                <div className="text-center">
                    <div className="flex justify-center">
                        <img src="/Logo.png" alt="Logo" className="mb-4" />
                    </div>
                    <h3 className="text-center text-2xl font-bold  leading-6 text-gray-900 mb-4">Sign Up</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className="mb-4">
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="mb-4">
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <div className="mb-6">
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                            />
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="bg-gradient-custom hover:bg-blue-700 text-white font-bold py-2 px-14 rounded focus:outline-none focus:shadow-outline mb-4" type="submit">
                                Sign Up
                            </button>
                            <p className="text-sm" onClick={onClose}>
                                    Have an account? <span className="text-purple-500 hover:text-purple-800 cursor-pointer">Sign In</span>
                                </p>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupModal;
