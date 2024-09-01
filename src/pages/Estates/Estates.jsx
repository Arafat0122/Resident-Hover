import PropTypes from 'prop-types';
import { FaDollarSign } from "react-icons/fa";
import { FaLocationDot } from 'react-icons/fa6';
import { SiAltiumdesigner } from 'react-icons/si';
import { TbHomeStats } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Estates = ({ estate }) => {

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            // Global settings:
            disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        });
    }, []);

    const { title, image_url, type, status, segment, price, area_sqft, location, facilities, id } = estate;

    return (
        <div data-aos="zoom-in-down">
            <div className="bg-base-300 border border-gray-400 rounded-lg p-2">
                <figure className='relative'>
                    <img className='w-96 h-56 rounded-lg border shadow-xl' src={image_url} alt="Shoes" />
                    <p className='bg-lime-600 shadow-xl w-fit px-2 py-0.5 rounded-full absolute bottom-44 left-2  font-bold text-white'>{status}</p>
                    <p className='bg-blue-600 shadow-xl w-fit px-2 py-0.5 rounded-full absolute bottom-2 left-1  font-bold text-white'>{segment}</p>
                </figure>
                <div className="mt-3 space-y-2 px-2">
                    <h2 className="card-title font-exo2">{type}</h2>
                    <p className='font-sans'>{title}</p>
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
            </div>
        </div>
    );
};

Estates.propTypes = {
    estate: PropTypes.object
}

export default Estates;