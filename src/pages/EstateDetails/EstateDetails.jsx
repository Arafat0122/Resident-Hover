import { useLoaderData, useParams } from "react-router-dom";
import { saveEstate } from "../../utility/localstorage";
import { FaLocationDot } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { TbHomeStats } from "react-icons/tb";
import { SiAltiumdesigner } from "react-icons/si";
import { Helmet } from "react-helmet";

const EstateDetails = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const estate = estates.find(estate => estate.id === idInt);

    const handleViewedProp = () => {
        saveEstate(idInt);
    };

    const {
        title,
        image_url,
        type,
        status,
        price,
        area_sqft,
        location,
        facilities,
        description,
        year_built,
        garage,
        parking_spots,
        hoa_fee,
        virtual_tour_url,
        contact_agent
    } = estate;

    return (
        <div className="min-h-screen pt-24 bg-gray-100">
            <Helmet>
                <title>{title} | Estate Details</title>
            </Helmet>
            <div className="max-w-6xl mx-auto p-6 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6">{title}</h2>
                <figure className="relative mb-8">
                    <img className="w-full lg:h-[600px] object-cover rounded-lg shadow-lg border-2 border-gray-300" src={image_url} alt={title} />
                    <div className="absolute top-4 left-4 flex space-x-2">
                        <p className={`${status === 'Rent' ? 'bg-red-600' : 'bg-green-600'} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md`}>{status}</p>
                        <p className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">{type}</p>
                    </div>
                </figure>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-8">
                        <p className="text-lg lg:text-xl font-semibold text-gray-700 mb-2">{description}</p>
                        <div className="flex items-center text-gray-600 mb-4">
                            <FaLocationDot className="text-green-600 mr-2" />
                            <span>{location.address}, {location.city}, {location.state}</span>
                        </div>
                        <div className="flex gap-4 mb-4">
                            <p className="flex items-center bg-red-200 text-red-600 px-3 py-1 rounded-full">
                                <FaDollarSign className="mr-1" /> {price.toLocaleString()}
                            </p>
                            <p className="flex items-center bg-red-200 text-red-600 px-3 py-1 rounded-full">
                                <TbHomeStats className="mr-1" /> {area_sqft} sqft
                            </p>
                        </div>
                        <div className="flex gap-4 mb-4">
                            <p className="flex items-center bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
                                <span className="font-semibold">Year Built:</span> {year_built}
                            </p>
                            <p className="flex items-center bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
                                <span className="font-semibold">Garage:</span> {garage ? 'Yes' : 'No'}
                            </p>
                            <p className="flex items-center bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
                                <span className="font-semibold">Parking Spots:</span> {parking_spots}
                            </p>
                            <p className="flex items-center bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
                                <span className="font-semibold">HOA Fee:</span> ${hoa_fee.toFixed(2)}
                            </p>
                        </div>
                        <div className="text-lg mb-4">
                            <h3 className="font-semibold text-gray-800 mb-2">Facilities:</h3>
                            <ul className="list-disc list-inside pl-5 text-gray-600">
                                {facilities.map((facility, index) => (
                                    <li key={index} className="flex items-center mb-1">
                                        <SiAltiumdesigner className="text-orange-500 mr-2" /> {facility}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-lg mb-4">
                            <h3 className="font-semibold text-gray-800 mb-2">Contact Agent:</h3>
                            <p className="text-gray-600 mb-1"><strong>Name:</strong> {contact_agent.name}</p>
                            <p className="text-gray-600 mb-1"><strong>Phone:</strong> {contact_agent.phone}</p>
                            <p className="text-gray-600 mb-1"><strong>Email:</strong> <a href={`mailto:${contact_agent.email}`} className="text-blue-600">{contact_agent.email}</a></p>
                        </div>
                        <div className="text-lg mb-4">
                            <h3 className="font-semibold text-gray-800 mb-2">Virtual Tour:</h3>
                            <a href={virtual_tour_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Virtual Tour</a>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button onClick={handleViewedProp} className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-sky-600 hover:to-indigo-600 transition-colors">
                            Add to Viewed Properties
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;