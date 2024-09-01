import PropTypes from 'prop-types';
import { FaDollarSign } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { SiAltiumdesigner } from 'react-icons/si';
import { TbHomeStats } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const ViewDetails = ({estate}) => {

    const { title, image_url, type, status, segment, price, area_sqft, location, facilities, id, description } = estate;

    return (
        <div>
            <div className="bg-base-300 border border-gray-400 rounded-lg p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <figure className='relative'>
                    <img className='w-96 h-full rounded-lg border shadow-xl' src={image_url} alt="Shoes" />
                    <p className='bg-lime-600 shadow-xl w-fit px-2 py-0.5 rounded-full absolute bottom-2 left-28  font-bold text-white'>{status}</p>
                    <p className='bg-blue-600 shadow-xl w-fit px-2 py-0.5 rounded-full absolute bottom-2 left-1  font-bold text-white'>{segment}</p>
                </figure>
                <div className="mt-3 space-y-2 px-2">
                    <h2 className="card-title">{type}</h2>
                    <p>{title}</p>
                    <div className='flex items-center gap-1 w-fit text-purple-900 '>
                        <FaLocationDot className='text-green-700'></FaLocationDot>
                        <span>{location.address}, {location.city}, {location.state}</span>
                    </div>
                    <div className='flex gap-4'>
                        <p className='flex items-center gap-1 bg-red-200 w-fit pr-2 px-2 py-0.5 rounded-full'><FaDollarSign></FaDollarSign> {price}</p>
                        <p className='flex items-center gap-1 bg-red-200 w-fit pr-2 px-2 py-0.5 rounded-full'><TbHomeStats></TbHomeStats>  {area_sqft} sqft</p>
                    </div>
                    <ul className=''><span className='font-medium text-lg'>Facilities:</span>
                        {
                            facilities.map((facility, index) => (<li className='ml-7 flex items-center gap-1' key={index}><SiAltiumdesigner></SiAltiumdesigner> {facility}</li>))
                        }
                    </ul>
                    <div className="">
                        <Link to={`/estates/${id}`}>
                            <button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded-md w-full text-white font-semibold">View Property</button>
                        </Link>
                    </div>
                </div>
                <div className='md:col-span-2 lg:col-span-1 px-5 pb-10 flex items-center'>
                    <p className='text-lg'>
                        <span className='text-xl font-bold'>Description: </span>
                        <br />
                        {description}
                        </p>
                </div>
            </div>
        </div>
    );
};

ViewDetails.propTypes={
    estate: PropTypes.object
}

export default ViewDetails;