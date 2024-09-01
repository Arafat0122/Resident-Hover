import { FaBuilding, FaFacebook, FaMailBulk, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="p-10 bg-gradient-to-r from-green-700 to-blue-900 text-white grid md:grid-cols-2 lg:grid-cols-5 items-center lg:gap-5 mt-5 space-y-5 lg:space-y-0">
            <div className="grid grid-cols-1 gap-1 lg:col-span-2">
                <h3 className="text-xl font-bold">About Us</h3>
                <p className="pr-16">Our Residential Hover Inc company is committed to delivering a high level of expertise, customer service, and attention to detail to the marketing and sales of Residential real estate and rental properties.</p>
            </div>
            <div className="grid grid-cols-1 gap-1 md:ml-32 lg:ml-0">
                <h6 className="text-xl font-bold">Company</h6>
                <Link to={'/about'} className="link link-hover">About Us</Link>
                <Link to={'/contact'} className="link link-hover">Contact Us</Link>
                <Link to={'/update'} className="link link-hover">Update Profile</Link>
            </div>
            <div className="grid grid-cols-1 gap-1">
                <h6 className="text-xl font-bold">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div className="grid grid-cols-1 gap-1 md:ml-32 lg:ml-0">
                <h3 className="text-xl font-bold">Contact Us</h3>
                <p className="flex items-center gap-1"><FaBuilding></FaBuilding> <span>Commercial St SE</span></p>
                <p className="flex items-center gap-1"><FaPhone></FaPhone> <span>(305) 555-4446</span></p>
                <p className="flex items-center gap-1"><FaMailBulk></FaMailBulk> <span>residentialhover@gmail.com</span></p>
                <p className="flex items-center gap-1 "><FaFacebook></FaFacebook> <span>Residential Hover</span></p>
            </div>
        </footer>
    );
};

export default Footer;