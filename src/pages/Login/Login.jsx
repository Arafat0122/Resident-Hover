import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import { Helmet } from "react-helmet";
import Img from '../../assets/login.png';

const Login = () => {
    const { logIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        logIn(email, password)
            .then(() => {
                navigate(location?.state ? location.state : '/');
                toast.success('Logged in successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch(() => {
                toast.error('Invalid email or password. Please try again.', {
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

    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .catch(error => {
                toast.error(`Google login failed: ${error.message}`, {
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

    const handleGithubLogIn = () => {
        signInWithGithub()
            .catch(error => {
                toast.error(`GitHub login failed: ${error.message}`, {
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
        <div className="min-h-screen flex items-center justify-center py-24">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div
                style={{ backgroundImage: `url(${Img})` }}
                className="w-full max-w-md mx-auto p-6 bg-white bg-opacity-80 rounded-lg shadow-lg"
            >
                <h2 className="text-3xl font-bold text-center text-white mb-6">Login to Your Account</h2>
                <form onSubmit={handleLogIn} className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-white">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
                            />
                            <a href="#" className="text-xs text-white hover:underline block text-right mt-1">Forgot password?</a>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-3 font-semibold rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
                    >
                        Login
                    </button>
                </form>

                <div className="flex items-center my-6">
                    <hr className="flex-1 border-gray-300" />
                    <p className="px-3 font-medium text-white">OR</p>
                    <hr className="flex-1 border-gray-300" />
                </div>

                <div className="space-y-4">
                    <button
                        onClick={handleGoogleLogIn}
                        aria-label="Login with Google"
                        className="flex items-center justify-center w-full p-4 border-2 border-gray-300 rounded-md hover:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-white mr-3">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p className="font-medium text-white">Login with Google</p>
                    </button>
                    <button
                        onClick={handleGithubLogIn}
                        aria-label="Login with GitHub"
                        className="flex items-center justify-center w-full p-4 border-2 border-gray-300 rounded-md hover:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-white mr-3">
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>
                        <p className="font-medium text-white">Login with GitHub</p>
                    </button>
                </div>

                <p className="text-sm text-center font-medium text-white bg-opacity-75 bg-gray-800 w-fit mx-auto mt-2 p-2 rounded-xl">
                    Do not have an account? <Link to={'/register'} className="text-indigo-400 hover:underline">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;