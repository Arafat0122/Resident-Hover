import { NavLink } from "react-router-dom";
import Logo from '../../assets/logo.png';
import './NavStyle.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        {
            user && <>
                <li><NavLink to={'/update'}>Update Profile</NavLink></li>
                <li><NavLink to={'/viewed'}>Viewed Properties</NavLink></li>
            </>

        }
        <li><NavLink to={'/about'}>About Us</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
        {
            !user && <li><NavLink to={'/register'}>Register</NavLink></li>
        }
    </>

    return (
        <div className="navbar bg-base-100 font-exo2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[3] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="flex items-center gap-1"><img className="w-7 lg:w-10" src={Logo} alt="" /> <span className="text-sm md:text-lg lg:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">Resident Hover</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end space-x-1">

                {
                    user ?
                        <button onClick={handleSignOut} className="btn text-lg">Log Out</button>
                        :
                        <NavLink to={'/login'}><button className="btn text-lg">Login</button></NavLink>
                }


                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img title={user ? `${user.displayName}` : 'User'} src={user ? `${user.photoURL}` : 'https://cdn-icons-png.flaticon.com/512/3541/3541871.png'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;