import { Helmet } from 'react-helmet';
import AbImg from '../../assets/about.png';

const About = () => {
    return (
        <div className='min-h-screen flex items-center bg-gray-100 py-24'>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <div className='container mx-auto p-6 lg:p-12'>
                <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
                    {/* Image Section */}
                    <div className='relative'>
                        <img className='w-full h-full rounded-lg shadow-lg border-4 border-gray-300'
                            src="https://ysac.ca/wp-content/uploads/2023/06/Illustration-House-investment-growth-Real-estate-Property-value.webp"
                            alt="Real Estate Illustration" />
                        <div className='absolute top-0 right-0 p-4'>
                            <div className='bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md'>Our Expertise</div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className='text-center lg:text-left'>
                        <img className='w-24 mx-auto lg:mx-0 mb-4' src={AbImg} alt="About Us Icon" />
                        <h2 className='text-4xl font-bold mb-4 text-gray-800'>About Us</h2>
                        <p className='text-lg text-gray-700 leading-relaxed'>
                            Welcome to Resident Hover, your premier destination for all things real estate. At Resident Hover, we pride ourselves on our commitment to providing unparalleled service and expertise in the ever-evolving world of property transactions. With years of experience in the industry, our team of dedicated professionals is here to guide you through every step of your real estate journey, whether you are buying, selling, or renting.
                            <br /><br />
                            Our mission is simple: to empower our clients with the knowledge and resources they need to make informed decisions about their residential investments. From stunning listings to expert advice, Resident Hover is your trusted partner in achieving your real estate dreams. Explore our website and discover why we are the preferred choice for discerning property seekers everywhere.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;