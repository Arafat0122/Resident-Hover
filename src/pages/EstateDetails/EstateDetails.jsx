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
    const estate = estates.find(estate => estate.id === idInt)
    // console.log(estates, id);
    // console.log(estate);

    const handleViewedProp = () => {
        saveEstate(idInt);
    }

    const { title, image_url, type, status, segment, price, area_sqft, location, facilities, description } = estate;

    return (
        <div>
            <Helmet>
                <title>{type}</title>
            </Helmet>
            <div className="p-5 animate__animated animate__zoomIn">
                <h2 className="text-4xl font-bold mb-5">{type}</h2>
                <figure className='col-span-2'>
                    <img className='lg:h-[600px] mx-auto rounded-lg shadow-xl border-2 border-black' src={image_url} alt="Shoes" />
                </figure>
                <div className="lg:max-w-3xl mx-auto">
                    <div className=" mb-10">
                        <div className="mt-3 space-y-2 px-2">
                            <p className="text-xl lg:text-2xl font-bold ">{title}</p>
                            <div className="flex gap-2">
                                <p className='bg-lime-600 shadow-xl w-fit px-2 py-0.5 rounded-full font-bold text-white'>{status}</p>
                                <p className='bg-blue-600 shadow-xl w-fit px-2 py-0.5 rounded-full font-bold text-white'>{segment}</p>
                            </div>
                            <div className='flex items-center gap-1 w-fit text-purple-900 text-lg lg:text-xl'>
                                <FaLocationDot className='text-green-700'></FaLocationDot>
                                <span>{location.address}, {location.city}, {location.state}</span>
                            </div>
                            <div className='flex gap-4'>
                                <p className='flex items-center gap-1 bg-red-200 w-fit pr-2 px-2 py-0.5 rounded-full'><FaDollarSign></FaDollarSign> {price}</p>
                                <p className='flex items-center gap-1 bg-red-200 w-fit pr-2 px-2 py-0.5 rounded-full'><TbHomeStats></TbHomeStats>  {area_sqft} sqft</p>
                            </div>
                            <ul className='text-lg'><span className='font-medium text-xl lg:text-2xl'>Facilities:</span>
                                {
                                    facilities.map((facility, index) => (<li className='ml-7 flex items-center gap-1' key={index}><SiAltiumdesigner></SiAltiumdesigner> {facility}</li>))
                                }
                            </ul>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h2 className='text-2xl lg:text-3xl font-bold'>Description: </h2>
                            <p className='text-lg lg:text-xl text-gray-500 ml-5'>
                                {description}
                            </p>
                        </div>

                    </div>
                    <div>
                        <button onClick={handleViewedProp} className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-lg font-bold text-white w-fit rounded-full px-5 py-2">Add to Viewed Properties</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default EstateDetails;