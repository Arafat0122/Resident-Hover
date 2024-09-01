import { Helmet } from 'react-helmet';
import Img from '../../assets/login.png';

const Contact = () => {

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <div className="relative bg-cover bg-center rounded-3xl overflow-hidden" style={{ backgroundImage: `url(${Img})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative max-w-4xl mx-auto p-8 lg:p-16 bg-gray-600 bg-opacity-40 rounded-3xl shadow-lg">
                    <h2 className="text-3xl font-bold text-white text-center mb-8">Contact Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Contact Form */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-white">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full bg-white rounded-md shadow-sm border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white">Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full bg-white rounded-md shadow-sm border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white">Message</label>
                                    <textarea
                                        placeholder="Your Message"
                                        rows="4"
                                        className="w-full bg-white rounded-md shadow-sm border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-4"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                        {/* Contact Information */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">Our Location</h3>
                            <p className="text-white mb-2">Commercial St SE</p>
                            <p className="text-white mb-2">Senior City, ST, 6355</p>
                            <p className="text-white mb-2">USA</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Contact Information</h3>
                            <p className="text-white mb-2">Phone: (305) 555-4446</p>
                            <p className="text-white mb-2">Email: residentialhover@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;