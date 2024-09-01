import PropTypes from 'prop-types';
import { FaDollarSign, FaMapMarkerAlt, FaBed, FaBath, FaCar, FaParking } from "react-icons/fa";
import { TbHomeStats } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Estates = ({ estate }) => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            delay: 100,
            duration: 600,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const {
        title,
        image_url,
        type,
        status,
        price,
        area_sqft,
        location,
        id,
        bedrooms,
        bathrooms,
        garage,
        parking_spots
    } = estate;

    return (
        <div data-aos="fade-up" className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 w-full max-w-sm mx-auto">
            <figure className="relative">
                <img className="w-full h-56 object-cover" src={image_url} alt={title} />
                <p className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">{status}</p>
            </figure>
            <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-gray-800">{type}</h2>
                <p className="text-gray-600">{title}</p>
                <div className="flex items-center text-sm text-gray-700">
                    <FaMapMarkerAlt className="text-green-600 mr-1" />
                    <span>{location.address}, {location.city}, {location.state} {location.zipcode}</span>
                </div>
                <div className="flex gap-4 text-sm mt-2">
                    <p className="flex items-center bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                        <FaDollarSign className="mr-1" /> ${price.toLocaleString()}
                    </p>
                    <p className="flex items-center bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                        <TbHomeStats className="mr-1" /> {area_sqft} sqft
                    </p>
                </div>
                <div className="flex gap-4 mt-2 text-sm text-gray-800">
                    <p className="flex items-center bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                        <FaBed className="mr-1" /> {bedrooms} beds
                    </p>
                    <p className="flex items-center bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded-full">
                        <FaBath className="mr-1" /> {bathrooms} baths
                    </p>
                </div>
                <div className="flex gap-4 mt-2 text-sm text-gray-800">
                    {garage && (
                        <p className="flex items-center bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                            <FaCar className="mr-1" /> Garage
                        </p>
                    )}
                    {parking_spots > 0 && (
                        <p className="flex items-center bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                            <FaParking className="mr-1" /> {parking_spots} parking spot{parking_spots > 1 ? 's' : ''}
                        </p>
                    )}
                </div>
                <div className="mt-4">
                    <Link to={`/estates/${id}`}>
                        <button className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white py-2 rounded-lg shadow-md hover:from-purple-600 hover:to-pink-600 transition-colors">View Property</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Estates.propTypes = {
    estate: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        area_sqft: PropTypes.number.isRequired,
        location: PropTypes.shape({
            address: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired,
            zipcode: PropTypes.string.isRequired,
        }).isRequired,
        id: PropTypes.number.isRequired,
        bedrooms: PropTypes.number.isRequired,
        bathrooms: PropTypes.number.isRequired,
        garage: PropTypes.bool.isRequired,
        parking_spots: PropTypes.number.isRequired,
    }).isRequired,
};

export default Estates;