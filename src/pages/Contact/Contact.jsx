import { Helmet } from 'react-helmet';
import Img from '../../assets/login.png'

const Contact = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <div style={{backgroundImage: `url(${Img})`}} className="bg-no-repeat w-fit mx-auto p-16 rounded-3xl animate__animated animate__zoomIn">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0000003d] rounded-3xl">
                    <h2 className="text-3xl font-semibold text-white text-center mb-8 ">Contact Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-100">Your Name</label>
                                    <input type="text" placeholder="Your Name" className="w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3 border border-black" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-100">Your Email</label>
                                    <input type="email" placeholder="Your Email" className="w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border border-black p-3" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-100">Message</label>
                                    <textarea placeholder="Your Message" rows="4" className="w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border border-black p-4"></textarea>
                                </div>
                                <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300">Send Message</button>
                            </form>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Our Location</h3>
                            <p className="text-gray-100 mb-2">Commercial St SE</p>
                            <p className="text-gray-100 mb-2">Senior City, ST, 6355</p>
                            <p className="text-gray-100 mb-2">USA</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Contact Information</h3>
                            <p className="text-gray-100 mb-2">Phone: (305) 555-4446</p>
                            <p className="text-gray-100 mb-2">Email: residentialhover@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;