import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";


const Root = () => {
    return (
        <div>
            <div className="text-black bg-gray-100">
                <Navbar></Navbar>
                <div className="max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto font-poppins">
                    <Outlet></Outlet>
                </div>
                <ToastContainer></ToastContainer>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;