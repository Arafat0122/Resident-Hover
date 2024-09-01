import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {

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

    return (
        <div>
            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-center text-3xl font font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#9dca34] to-[#025742] hover:scale-125 hover:text-blue-500">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 text-gray-600 max-w-2xl mx-auto text-center">Find answers to commonly asked questions about searching for properties on our website. Learn how to use our search filters to find the perfect home for you.</p>
                    <div className="space-y-4">
                        <details data-aos="fade-down" className="w-full border-2 border-black rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">How do I search for properties on your website?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">To search for properties, simply navigate to the Properties on our website. You can use the search filters to narrow down your options based on criteria such as location, property type, price range, and number of bedrooms. </p>
                        </details>
                        <details data-aos="fade-down" className="w-full border-2 border-black rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">What are the steps involved in purchasing a property through your website?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600"> Purchasing a property through our website is simple. First, browse through the listings to find a property that meets your requirements. Once you have found a property you are interested in, you can schedule a viewing or request more information from the property listing page. If you decide to proceed with the purchase, our team will guide you through the necessary steps, including negotiations, financing options, legal documentation, and closing the deal.</p>
                        </details>
                        <details data-aos="fade-down" className="w-full border-2 border-black rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">Do you offer assistance for first-time homebuyers?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Yes, we provide assistance for first-time homebuyers to make the process as smooth and stress-free as possible. Our team of real estate experts can offer guidance on every step of the homebuying journey, from understanding your budget and financing options to navigating the market, conducting property inspections, and finalizing the purchase. We are here to answer your questions, address any concerns, and help you find the perfect home that fits your needs and budget. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;