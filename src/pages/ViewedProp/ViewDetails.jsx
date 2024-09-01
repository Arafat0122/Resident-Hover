import PropTypes from 'prop-types';
import { FaDollarSign } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { SiAltiumdesigner } from 'react-icons/si';
import { TbHomeStats } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const ViewDetails = ({ estate }) => {
    const { title, image_url, type, status, segment, price, area_sqft, location, facilities, id, description } = estate;

    return (
        <div className="bg-gray-100 p-6 pt-24">
            <div className="max-w-4xl mx-auto bg-white border border-gray-300 rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <figure className="relative col-span-1 h-fit">
                    <img className="w-full h-60 object-cover rounded-lg border border-gray-300 shadow-md" src={image_url} alt={title} />
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                        <p className={`bg-${status === 'Rent' ? 'red-600' : 'green-600'} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md`}>{status}</p>
                        <p className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">{segment}</p>
                    </div>
                </figure>
                <div className="col-span-1 md:col-span-1 lg:col-span-2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{type}</h2>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">{title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                            <FaLocationDot className="text-green-600" />
                            <span className="text-gray-600 text-sm">{location.address}, {location.city}, {location.state}</span>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <p className="flex items-center bg-red-200 text-red-600 px-3 py-1 rounded-full text-sm">
                                <FaDollarSign className="mr-1" /> {price.toLocaleString()}
                            </p>
                            <p className="flex items-center bg-red-200 text-red-600 px-3 py-1 rounded-full text-sm">
                                <TbHomeStats className="mr-1" /> {area_sqft} sqft
                            </p>
                        </div>
                    </div>
                    <ul className="text-gray-700 mb-4">
                        <span className="font-semibold text-lg">Facilities:</span>
                        <ul className="list-disc list-inside pl-5">
                            {facilities.map((facility, index) => (
                                <li className="flex items-center gap-2 mb-1 text-sm" key={index}>
                                    <SiAltiumdesigner className="text-orange-500" /> {facility}
                                </li>
                            ))}
                        </ul>
                    </ul>
                    <p className="text-gray-700 text-lg mb-4">
                        <span className="font-semibold">Description:</span>
                        <br />
                        {description}
                    </p>
                    <Link to={`/estates/${id}`}>
                        <button className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-violet-600 hover:to-fuchsia-600 transition">
                            View Property
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

ViewDetails.propTypes = {
    estate: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        segment: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        area_sqft: PropTypes.number.isRequired,
        location: PropTypes.shape({
            address: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired,
        }).isRequired,
        facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default ViewDetails;