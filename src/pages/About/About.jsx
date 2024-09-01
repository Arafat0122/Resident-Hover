import { Helmet } from 'react-helmet';
import AbImg from '../../assets/about.png'

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <div className='grid lg:grid-cols-2 gap-10 animate__animated animate__zoomIn'>
                <div>
                    <img className='h-full rounded-lg shadow-xl shadow-slate-500' src="https://ysac.ca/wp-content/uploads/2023/06/Illustration-House-investment-growth-Real-estate-Property-value.webp" alt="" />
                </div>
                <div className="">
                    <img className='w-48 mx-auto mb-5' src={AbImg} alt="" />
                    <h2 className='text-4xl font-medium text-center mb-5'>About Us</h2>
                    <p className='text-center text-gray-600'>Welcome to Resident Hover, your premier destination for all things real estate. At Resident Hover, we pride ourselves on our commitment to providing unparalleled service and expertise in the ever-evolving world of property transactions. With years of experience in the industry, our team of dedicated professionals is here to guide you through every step of your real estate journey, whether you are buying, selling, or renting. Our mission is simple: to empower our clients with the knowledge and resources they need to make informed decisions about their residential investments. From stunning listings to expert advice, Resident Hover is your trusted partner in achieving your real estate dreams. Explore our website and discover why we are the preferred choice for discerning property seekers everywhere.</p>
                </div>
            </div>
        </div>
    );
};

export default About;