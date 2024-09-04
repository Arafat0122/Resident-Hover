import { useLoaderData } from "react-router-dom";
import Estates from "../Estates/Estates";
import FAQ from "../FAQ/FAQ";
import Slider from "../Slider/Slider";
import Trasted from "../Trasted/Trasted";
import { Helmet } from "react-helmet";


const Home = () => {

    const estates = useLoaderData();

    return (
        <div className="pt-24">
            <Helmet>
                <title>Resident Hover - A Modern Real Estate Platform</title>
            </Helmet>
            <Slider></Slider>
            <div>
                <div className='my-10'>
                    <h2 className='text-center text-3xl font font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#9dca34] to-[#025742] hover:scale-125 hover:text-blue-500'>Estates</h2>
                </div>
                <div data-aos="fade-left" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> 
                {
                    estates.map(estate => <Estates
                        key={estate.id}
                        estate={estate}
                    ></Estates>)
                }
                </div>
            </div>
            <Trasted></Trasted>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;