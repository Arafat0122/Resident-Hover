import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
import Img from '../../assets/login.png';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');

        if (password.length < 6) {
            toast.error('Password should be at least 6 characters or longer', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at least one uppercase character.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Your password should have at least one lowercase character.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        createUser(email, password, name, photo)
            .then(() => {
                toast.success('User registered successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch(error => {
                toast.error(`${error}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div
                style={{ backgroundImage: `url(${Img})` }}
                className="w-full max-w-md mx-auto p-6 rounded-lg shadow-lg bg-white bg-opacity-60"
            >
                <h2 className="text-3xl font-bold text-center text-white mb-6">Register Your Account</h2>
                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-white">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full bg-transparent px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="w-full bg-transparent px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Photo URL</label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo URL"
                                className="w-full bg-transparent px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div className="relative">
                            <label className="block text-sm font-medium text-white">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="w-full bg-transparent px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-2 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-6 font-semibold rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
                    >
                        Register
                    </button>
                </form>
                <p className="text-sm font-bold text-center text-white mt-4 p-2 bg-[#0000009c] rounded-full">
                    Already have an account? <Link to="/login" className="text-indigo-200 hover:underline">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;